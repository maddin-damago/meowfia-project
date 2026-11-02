"use strict";
import express from "express";
import cors from "cors";
import { router } from "./router/router.js";

process.loadEnvFile(".env");

const PORT = process.env.DB_BACKEND_PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
