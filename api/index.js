import express from "express";
const app=express();
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
import userRoute from "./routes/user.route.js";
// import router from "./routes/user.route.js";
 import authRoute from "./routes/auth.route.js";
// app.use("/api",router);

app.use(express.json())
// app.use(express.text())  
app.use(express.urlencoded({extended:false}))

app.use("/api",authRoute);
app.use("/api",userRoute);



mongoose.connect(process.env.MONGO).then((result) => {
    console.log("database connected")
    
}).catch((err) => {
    console.log("error in connecting db",err.message)
    
});




app.listen(3000,()=>{
    console.log("server is running on port 3000")
})




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });