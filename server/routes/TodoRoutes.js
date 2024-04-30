import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { todofetch } from "../controller/todoController.js";

const router = express.Router();

router.get("/fetch", authMiddleware, todofetch);

export default router;
