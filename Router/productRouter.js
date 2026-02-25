import express from "express";
import { createProduct, deleteProducts, getProductInfo, getProducts, updateProducts } from "../controllers/productController.js";


const productRouter =new express.Router();


productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProducts);
productRouter.put("/:productId",updateProducts);
productRouter.get("/:productId",getProductInfo)


export default productRouter;