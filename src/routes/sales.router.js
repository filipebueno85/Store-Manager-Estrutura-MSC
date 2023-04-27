const express = require('express');
const { salesController } = require('../controllers');
const productSalesValidate = require('../middlewares/productSalesValidate');
const quantityValidate = require('../middlewares/quantityValidate');

const router = express.Router();

router.post('/sales', productSalesValidate, quantityValidate, salesController.createSalesProduct);

module.exports = router;
