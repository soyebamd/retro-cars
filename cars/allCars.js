import { setUpDb } from "../init_db/db.js";

// all cars

export async function cars(req, res) {
  try {
    const getDatabase = await setUpDb();
    const data = await getDatabase.all(`SELECT * FROM retroCars`);
    // console.table(data);

    let car = data;

    const { brand, model, year, price, color, condition, sold } = req.query;

    if (brand) {
      car = car.filter(
        (car) => car.brand.toLowerCase() === brand.toLowerCase(),
      );
    }

    if (model) {
      car = car.filter(
        (car) => car.model.toLowerCase() === model.toLowerCase(),
      );
    }

    if (year) {
      car = car.filter((car) => car.year === Number(year));
    }

    if (price) {
      car = car.filter((car) => car.price === Number(price));
    }

    if (color) {
      car = car.filter(
        (car) => car.color.toLowerCase() === color.toLowerCase(),
      );
    }

    if (condition) {
      car = car.filter((car) => car.condition === Number(condition));
    }

    if (sold) {
      car = car.filter((car) => car.sold === JSON.parse(sold));
    }

    res.json(car);
  } catch (err) {
    console.log(err);
  }
}

// search by id
export async function getCarByBrand(req, res) {
  const getDatabase = await setUpDb();
  const data = await getDatabase.all(`SELECT * FROM retroCars`);

  const { brand, model } = req.params;

  const filteredData = data.filter(
    (car) => car[brand].toLowerCase() === model.toLowerCase(),
  );

  res.json(filteredData);
}
