import express from 'express'
import { addQuestion, getQuestion } from '../controller/questionController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post("/add",protect,addQuestion)
router.get("/question/:testId",getQuestion)

export default router