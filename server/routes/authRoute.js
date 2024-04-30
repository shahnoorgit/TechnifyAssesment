import express from "express";
import { login, signup } from "../controller/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", signup);

export default router;
