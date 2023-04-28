const express = require('express');
const { salesController } = require('../controllers');
const productSalesValidate = require('../middlewares/productSalesValidate');
const quantityValidate = require('../middlewares/quantityValidate');
const saleValidate = require('../middlewares/saleValidate');

const router = express.Router();

router.get('/sales', salesController.getAllSales);

router.get('/sales/:id', saleValidate, salesController.getSalesById);

router.post('/sales', productSalesValidate, quantityValidate, salesController.createSalesProduct);

router.delete('/sales/:id', saleValidate, salesController.deleteSales);

module.exports = router;
