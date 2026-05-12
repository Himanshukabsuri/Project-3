import jwt from 'jsonwebtoken'

export const protect = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({success:false,message:"Token not found"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decoded;

        next()
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

export const adminOnly = (req,res,next)=>{
    try {
        if (req.existUser.role !== "admin") {
            return res.status(403).json({success:false,message:"Admin access only"})
        }
        next()
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}