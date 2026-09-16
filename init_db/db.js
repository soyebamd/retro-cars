import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

//database connection

export async function setUpDb() {
  return open({
    filename: path.join("carsdb.db"),
    driver: sqlite3.Database,
  });
}
