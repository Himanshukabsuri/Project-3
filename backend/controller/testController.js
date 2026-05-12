import Test from "../models/testModel.js";


export const createTest = async(req,res)=>{
    try {
        const {title,description,duration} = req.body;

        if (!title || !description) {
            return res.status(400).json({success:false,message:"All fields are required"})
        }

        const test = await Test.create({
            title,
            description,
            duration,
            createdBy:req.user.id,
        })

        res.status(201).json({success:true,message:"Test created succefully"})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}


// get all test

export const getAllTest = async(req,res)=>{
    try {
        const test = await Test.find().populate("createdBy","fullName email");

         res.status(200).json({success:true,test})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}