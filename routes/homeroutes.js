import { Router } from 'express'
const router = Router()
import hc from '../controllers/homecontroller.js'

router.get("/", hc.index);

export default router