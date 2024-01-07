const productsDB = require('../database/models/products');

class ProductsService{
    async getProducts(){
        try {
            return await productsDB.getAll();
        }catch (error){
            console.log(error);
        }
    }

    async getProductById(id){
        try {
            return await productsDB.getById(id);
        }catch (error){
            console.log(error);
        }
    }

    async createProduct(product){
        try {
            return await productsDB.create(product);
        }catch (error){
            console.log(error);
        }
    }

    async updateProduct(product, id){
        try {
            return await productsDB.update(product, id);
        }catch (error){
            console.log(error);
        }
    }

    async removeProduct(id){
        try {
            return await productsDB.remove(id);
        }catch (error){
            console.log(error);
        }
    }
}

module.exports = ProductsService;