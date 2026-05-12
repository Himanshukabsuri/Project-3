import express from 'express'
import { createTest, getAllTest } from '../controller/testController.js'

const router = express.Router()

router.post("/test",createTest);
router.get("/get-test",getAllTest);

export default router