import express from "express";
import { createProduct } from "../controllers/productController.js";
const productRouter =new express.Router();
productRouter.post("/",createProduct);
export default productRouter;