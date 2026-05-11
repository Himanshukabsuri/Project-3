import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRoutes from './routes/authRoutes.js'

dotenv.config()

const app =express()
app.use(express.json())
app.use(cors())
connectDb()

app.use("/api/auth",userRoutes)

const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("Api is working")
})

app.listen(PORT,()=>{
    console.log(`server is connected :http://localhost:${PORT}`);
    
})