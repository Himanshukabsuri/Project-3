import Question from "../models/questionModel.js";


export const addQuestion = async(req,res)=>{
    try {
        const {testId,question,options,correctAnswer} = req.body;

        if (!testId || !question || !options || !correctAnswer) {
            return res.status(400).json({success:false,message:"All fields are required"})
        }

        // create question

        await Question.create({
            testId,
            question,
            options,
            correctAnswer
        })

        res.status(201).json({success:true,message:"Question added succefully"})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

//  get question by teat id

export const getQuestion = async(req,res)=>{
    try {
        const {testId} = req.params;

        const questions = await Question.find({testId})

        res.status(200).json({success:true,questions})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}