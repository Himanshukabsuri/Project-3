import mongoose, { Schema } from "mongoose";

const resultModel = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    testId:{type:mongoose.Schema.Types.ObjectId,ref:"Test",required:true},
    score:{type:Number,required:true},
    totalQuestion:{type:Number,required:true},
    answer:[
        {
            questionId:{type:mongoose.Schema.Types.ObjectId,ref:"Question"},
            selectedAnswer:{type:String},
            correctAnswer:{type:String},
            isCorrect:{type:Boolean}

        }
    ]
},{timestamps:true})

const Result = mongoose.model("Result",resultModel)

export default Result