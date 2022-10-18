import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectWithDB } from "./connections.js";
import { Routes } from "./routes/index.js";


const app = express();
const port = process.env.PORT || 3333;

const dbURL = process.env.DB_URL || "http://localhost:1342"
await connectWithDB(dbURL)
  .then(() => console.log("Database connected..."))
  .catch(() => console.log("Error on connect with database."))

app.use(express.json());
app.use(Routes);
app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);