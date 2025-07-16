import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const uri=process.env.MONGO_URI


const connection =async ()=>{
    mongoose.connect(uri)
try {
    console.log("Connected successfully to MongoDB!")
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

    }

export default connection


