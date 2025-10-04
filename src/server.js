import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";

dotenv.config();

const app = express();

app.listen(8000, async () => {
  await connectDB();
  console.log(`Server is Running on Port http://localhost:8000`);
});
