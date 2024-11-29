import express from "express";
import { registerTutor, tutorLogin } from "../controller/tutorController.js";


const router = express.Router();

router.post("/Tsignup", registerTutor);
router.post("/Tlogin", tutorLogin)

export default router;