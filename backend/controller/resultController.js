import Question from "../models/questionModel";
import Result from "../models/resultModel";


export const submitTest = async (req, res) => {
    try {
        const { testId, answer } = req.body;

        if (!testId || !answer) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }

        const question = await Question.find({ testId });

        let score = 0;

        let resultAnswer = [];

        questions.forEach((question) => {
            const userAnswer = answer.find((ans) => ans.questionId === question._id.toString()
            );


            if (userAnswer) {
                const isCorrect = userAnswer.selectedAnswer === question.correctAnswer;

                if (isCorrect) {
                    score++;
                }

                resultAnswer.push({
                    questionId: question._id,
                    selectedAnswer: userAnswer.selectedAnswer,
                    correctAnswer: question.correctAnswer,
                    isCorrect,
                })
            }
        })

        const result = await Result.create({
            userId: req.existUser.id,
            testId,
            score,
            totalQuestion: question.length,
            answer: resultAnswer,
        });

        res.status(201).json({success:true,message:"Test submitted successfully"})


    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

export const getMyResult = async(req,res)=>{
    try {
        const results = await Result.find({
            userId:req.existUser.id,
        }).populate("testId" , "title").sort({createdAt:-1});

        res.status(200).json({success:true,results})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}