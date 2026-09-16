import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";
import { carData } from "./data/cars.js";

//database connection

async function insertData() {
  const db = await open({
    filename: path.join("carsdb.db"),
    driver: sqlite3.Database,
  });

  try {
    await db.exec("BEGIN TRANSACTION");
    for (const {
      brand,
      model,
      year,
      price,
      color,
      condition,
      sold,
      image,
    } of carData) {
      await db.run(
        `INSERT INTO retroCars (brand, model, year, price, color, condition, sold, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [brand, model, year, price, color, condition, sold, image],
      );
    }
    await db.exec("COMMIT");
    console.log("Data inserted");
  } catch (err) {
    await db.exec("ROLLBACK");
    console.log("some error have ", err);
  } finally {
    await db.close();
    console.log("Table Inserted");
  }
}

insertData();
