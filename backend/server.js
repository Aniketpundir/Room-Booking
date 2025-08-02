//imports
import express from "express";
import { config } from "dotenv";
import connectDb from "./config/dbConfig.js";

//server setup
config();
const app = express();
const PORT = process.env.PORT || 5000;

//Database connection
const dbUrl = process.env.MONGO_URI;
connectDb(dbUrl);

//server run
app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
});
