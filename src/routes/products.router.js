const express = require('express');
const { productsController } = require('../controllers');
const productNameValidate = require('../middlewares/productNameValidate');

const router = express.Router();

router.get('/products', productsController.findAllProducts);

router.get('/products/:id', productsController.findProductById);

router.post('/products', productNameValidate, productsController.createProduct);

module.exports = router;
