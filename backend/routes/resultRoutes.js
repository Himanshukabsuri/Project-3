import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { getMyResult, submitTest } from '../controller/resultController.js'

const router = express.Router()

router.post("/submit",protect,submitTest);
router.get("/my-result",protect,getMyResult);


export default router;