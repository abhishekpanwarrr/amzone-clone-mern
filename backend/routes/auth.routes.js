import express from "express";
import { login,register,updateUser } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/login", login);
router.post("/register", register);
router.post("/update/:id", updateUser);

export default router;
