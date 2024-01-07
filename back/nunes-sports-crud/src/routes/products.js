const Router = require('express');
const router = Router();
const { productsController } = require('../controllers');

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.removeProduct);

module.exports = router;