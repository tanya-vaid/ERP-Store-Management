import { Router } from "express";
const router = Router();
import pc from "../controllers/purchasecontroller.js";

router.get("/", pc.index);
router.get("/viewall", pc.view_all);
router.get("/viewallpo", pc.view_all_po);
router.get("/approve", pc.approve);
router.get("/approvep/(:id)", pc.approvep);
router.post("/findm/(:id)", pc.findm);
router.get("/find/(:id)", pc.find);
router.get("/po", pc.po);
router.get("/po_create/(:id)", pc.po_create);
router.post("/create_requisition", pc.create_requisition);
router.post("/create_po", pc.create_po);
router.post("/stockcharge", pc.stockcharge);

export default router;
