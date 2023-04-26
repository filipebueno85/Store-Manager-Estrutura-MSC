const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.findAllProducts);

router.get('/products/:id', productsController.findProductById);

router.post('/products', productsController.createProduct);

module.exports = router;
