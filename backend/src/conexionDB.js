import * as dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI)
    console.log('DB ok...')
    
} catch (error) {
    console.log(error)
}