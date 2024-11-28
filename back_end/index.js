import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(bodyParser.json());



mongoose
    .connect(process.env.Mongo_url)
    .then(() => {
        console.log("Database connected succesfully")
    })

app.use(cors({
 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials:true
}));

// app.use("/",router)
app.get("/", (req, res) => {
    res.send("i am working properly")
})
app.listen(process.env.PORT, () => {
    console.log(`server is running on port${process.env.PORT}`)
})