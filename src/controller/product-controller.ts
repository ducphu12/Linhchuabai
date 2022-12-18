import {ProductService} from "../service/product-service";
import {Request, Response} from "express";


export class ProductController {
    public productService : ProductService;

    constructor() {
        this.productService = new ProductService()
    }

    getAll = async (req: Request, res: Response) => {
        console.log(2)
        let products = await this.productService.findAll();
        return res.status(200).json(products)
    }
}
export default new ProductController();