"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async () => {
            return await this.productRepository.find();
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.productRepository = connection.getRepository(product_1.Product);
            console.log('Connect Db success');
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map