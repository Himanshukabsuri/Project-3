import mongoose from "mongoose";

const connectDb = async(req,res)=>{
    try {
        mongoose.connect(process.env.MONGODB_URL,{dbName:"admin"})
        console.log("database is connected");
        
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDb