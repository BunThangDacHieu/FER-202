// app.js
import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
config({ path: "./config/.env" });

app.use(express.json());
dbConnection();

export default app;
