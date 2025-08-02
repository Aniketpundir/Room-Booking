import mongoose from "mongoose";

const connectDb = (url)=> mongoose.connect(url).then(()=>{
    console.log("successfully connected to Db");
}).catch((e)=>{
    console.log(`connection to database is failed... due to ${e}`);
});

export default connectDb;