import express from 'express'
import { createTest, getAllTest } from '../controller/testController.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.post("/test",protect,createTest);
router.get("/get-test",getAllTest);

export default router