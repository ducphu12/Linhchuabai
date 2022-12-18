import {AppDataSource} from "../data-source";
import {Product} from "../model/product";

export class ProductService {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.productRepository = connection.getRepository(Product)
            console.log('Connect Db success')
        })

    }

    findAll = async () => {
        return await this.productRepository.find()
    }

}
