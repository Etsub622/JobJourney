import express from "express";
import { registerParent, parentLogin } from "../controller/parentController.js"

const router = express.Router()

router.post("/Psignup", registerParent)
router.post("/Plogin", parentLogin)

export default router;