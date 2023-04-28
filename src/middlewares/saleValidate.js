const { salesModel } = require('../models');

const saleValidate = async (req, res, next) => {
  const { id } = req.params;
  const allSales = await salesModel.getAllSales();

  const findSale = await allSales.some((sale) => sale.saleId === Number(id));

  if (!findSale) return res.status(404).json({ message: 'Sale not found' });
 
  return next();
};

module.exports = saleValidate;
