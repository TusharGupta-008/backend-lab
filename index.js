import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("Hiiii im on the way");
});

connectDb();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
