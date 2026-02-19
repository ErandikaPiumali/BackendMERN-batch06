import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./model/student.js";
import studentRouter from "./Router/studentRouter.js";
import userRouter from "./Router/userRouter.js";
import dotenv from "dotenv"
dotenv.config() // load env variables to the package

//set up backend
const app=express();

//set middleware
app.use(bodyParser.json())
app.use ("/students",studentRouter);
app.use("/users",userRouter);








//connected to db
const connectionString=process.env.MONGO_URI
mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected")
    }
).catch(
    ()=>{
console.log("Failed to connect database")
    }
)



//set up port
app.listen(5000,()=>{
    console.log("Server started")
});

