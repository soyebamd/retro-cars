import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

//database connection

async function createDatabase() {
  const db = await open({
    filename: path.join("carsdb.db"),
    driver: sqlite3.Database,
  });

  await db.exec(
    `
    CREATE TABLE IF NOT EXISTS retroCars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    price INTEGER NOT NULL,
    color TEXT NOT NULL,
    condition INTEGER NOT NULL,
    sold BOOLEAN NOT NULL DEFAULT 0,
    image TEXT NOT NULL
  )
    
    `,
  );

  await db.close();
  console.log("Table Created");
}

createDatabase();
