import { setUpDb } from "./init_db/db.js";

try {
  const getDatabase = await setUpDb();
  const data = await getDatabase.all(`SELECT * FROM retroCars`);
  console.table(data);
} catch (err) {
  console.log(err);
}
