const { productsService } = require ('../services');
const productService = new productsService();

const getProducts = async (req, res, next) => {
    try{
        const products = await productService.getProducts();
        res.json(products);
    }catch (error){
        next(error);
    }
}

const getProductById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const product = await productService.getProductById(id);
        res.json(product);
    }catch (error){
        next(error);
    }
}

const createProduct = async (req, res, next) => {
    try{
        const product = req.body;
        const createdProduct = await productService.createProduct(product);
        res.json(createdProduct);
    }catch (error){
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try{
        const product = req.body;
        const { id } = req.params;
        const updatedProduct = await productService.updateProduct(product, id);
        res.json(updatedProduct);
    }catch (error){
        next(error);
    }
}

const removeProduct = async (req, res, next) => {
    try{
        const { id } = req.params;
        const removedProduct = await productService.removeProduct(id);
        res.json(removedProduct);
    }catch (error){
        next(error);
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    removeProduct
}