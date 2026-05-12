import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true,default:60},
    createdBy:[{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}]
})

const Test = mongoose.model("Test",testSchema)

export default Test;