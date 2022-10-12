import * as dotenv from "dotenv";
import express from "express";
import { Routes } from "./routes/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3333;
app.use(express.json());
app.use(Routes);
app.listen(port, () => {
  console.log("Server is running...");
});
