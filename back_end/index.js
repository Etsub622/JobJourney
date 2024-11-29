import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import parentRoutes from "./routes/parentRoutes.js"; 
import tutorRoutes from "./routes/tutorRoutes.js"

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

app.use("/api/Parent",parentRoutes)
app.use("/api/tutor", tutorRoutes)


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})