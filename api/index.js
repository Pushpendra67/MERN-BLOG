import express from "express";
const app=express();
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
import router from "./routes/user.route.js";

app.use("/api",router);


mongoose.connect(process.env.MONGO).then((result) => {
    console.log("database connected")
    
}).catch((err) => {
    console.log("error in connecting db",err.message)
    
});




app.listen(3000,()=>{
    console.log("server is running on port 3000")
})