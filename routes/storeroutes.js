import { Router } from 'express'
const router = Router()
import sc from '../controllers/storecontroller.js'


router.get('/', sc.index)
 
router.get('/viewall', sc.view_all)
router.get("/indents", sc.indents);

router.post('/add_product', sc.add_p)
router.post('/issue_product', sc.issue_p)
router.post('/update_qty', sc.update_p)
router.post("/find/:id", sc.find_p);



export default router