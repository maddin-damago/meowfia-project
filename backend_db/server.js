"use strict";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./router/router.js";

process.loadEnvFile(".env");

const PORT = process.env.DB_BACKEND_PORT;

const app = express();

app.use(
  cors({
    origin: `http://127.0.0.1:5500`,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
