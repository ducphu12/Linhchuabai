import {Router} from "express";
import productController from "../controller/product-controller";

export const productRouter = Router();
productRouter.get('/',productController.getAll)
