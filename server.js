import express from "express";
import path from "node:path";
import cors from "cors";

import { appRouter } from "./router/routerAPI.js";

//creating a basic server first and test

const PORT = 8000;

const app = express();

app.use(express.static("public"));

app.use(cors());

app.use("/", appRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});

app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("Failed to start server:", err);
  });
