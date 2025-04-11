import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connectiondb =  mongoose.connect(process.env.MONGODB_CONN).then(()=>{
    console.log("Mongodb is connected")
}).catch((err)=>{
    console.log('mongodb err :'+ err)
})

export default connectiondb;
