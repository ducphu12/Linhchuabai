import { ProductService } from "../service/product-service";
import { Request, Response } from "express";
export declare class ProductController {
    productService: ProductService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ProductController;
export default _default;
