import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const port = process.env.PORT || 7000

app.get("/",(req,res)=>{
  res.send("Hiiii im on the way")
})

app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
})