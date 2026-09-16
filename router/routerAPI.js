import express from "express";

import { cars, getCarByBrand } from "../cars/allCars.js";

export const appRouter = express.Router();

//API #1 — Get all cars

appRouter.get("/api/cars", cars);

appRouter.get("/api/cars/:brand/:model", getCarByBrand);
