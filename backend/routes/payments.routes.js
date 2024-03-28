import express from "express";
import {
  createOrder,
  checkSuccess
} from "../controllers/payments.controller.js";

const router = express.Router();

router.post("/orders", createOrder);
router.post("/success", checkSuccess);


export default router;
