import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRouter from "./Router/userRouter.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import productRouter from "./Router/productRouter.js";
import cors from "cors";

dotenv.config() // load env variables to the package

//set up backend
const app=express();


//1-set middleware
app.use(bodyParser.json())

app.use(cors())//accept any request coming from any origin

//2-auth middleware
app.use(
    (req,res,next)=>{
    const value=req.header("Authorization")
    console.log(value)
   // next()
//if have header-token
   if(value!=null){

          const token=value.replace("Bearer ","");// removed printing bearer text in the token
      jwt.verify(token,
       process.env.JWT_SECRET,
        (err,decoded)=>{
              console.log(decoded);

            if (decoded==null){
                res.status(403).json({
                    message:"Unauthorized"
                })
               }else{
                req.user=decoded // read the user related to the request,instead this user variable we can put any name. 
                next();
            }
            

        }

      )

   }else{
  
    next()
}
})

//3-set up routes

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);





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

