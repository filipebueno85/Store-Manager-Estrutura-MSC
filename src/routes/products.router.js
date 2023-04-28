const express = require('express');
const { productsController } = require('../controllers');
const productNameValidate = require('../middlewares/productNameValidate');
const productNotFoundValidate = require('../middlewares/productNotFoundValidate');

const router = express.Router();

router.get('/products', productsController.findAllProducts);

router.get('/products/:id', productsController.findProductById);

router.post('/products', productNameValidate, productsController.createProduct);

router.put('/products/:id',
  productNameValidate,
  productNotFoundValidate,
  productsController.updateProductById);

module.exports = router;
