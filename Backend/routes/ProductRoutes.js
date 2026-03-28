import express from "express";
const router = express.Router();
import Product from "../models/ProductModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { getProduct, getProductById } from "../controllers/productControllers.js";

router.route("/").get(getProduct);
router.route("/:id").get(getProductById)

export default router;
