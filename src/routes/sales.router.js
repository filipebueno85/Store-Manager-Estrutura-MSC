const express = require('express');
const { salesController } = require('../controllers');
const productSalesValidate = require('../middlewares/productSalesValidate');

const router = express.Router();

router.post('/sales', productSalesValidate, salesController.createSalesProduct);

module.exports = router;
