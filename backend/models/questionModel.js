import mongoose from "mongoose";

const questionModel = new mongoose.Schema({
    testId :{type:mongoose.Schema.Types.ObjectId,ref:"Test",required:true},
    question:{type:String,required:true},
    options:{type:[String],required:true},
    correctAnswer:{type:String,required:true}
},{timestamps:true})

const Question = mongoose.model("Question",questionModel)

export default Question;