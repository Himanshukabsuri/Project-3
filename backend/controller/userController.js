import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//  signup kro
export const signup = async(req,res)=>{
    try {
        const {fullName,email,password,role} = req.body;

        const existUser = await User.findOne({email});

        if (!fullName || !email || !password || !role) {
            return res.status(400).json({success:false,message:"All Field are required"});
        }

        if (existUser) {
            return res.status(400).json({success:false,message:"User already exists"});

        }

        const hashPassword = await bcrypt.hash(password,10)

         await User.create({
            email,
            password:hashPassword,
            role,
            fullName
        })

        res.status(201).json({success:true,message:"Sign up successfully"})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

//  login kro

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({success:false,message:"All fields are required"})
        }

        const existUser = await User.findOne({email})
        if (!existUser) {
            return res.status(400).json({success:false,message:"User not found."})
        }

        const isMatchPassword = await bcrypt.compare(password,existUser.password)

        if (!isMatchPassword) {
            return res.status(400).json({success:false,message:"Invalid creditional"})
        }

        const token = jwt.sign({id:existUser._id,role:existUser.role},process.env.JWT_SECRET,{expiresIn:"7d"})

         res.status(200).json({success:true,message:"login successfully",token})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}