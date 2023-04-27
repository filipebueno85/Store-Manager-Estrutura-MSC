const { salesService } = require('../services');

const createSalesProduct = async (req, res) => {
  const productSales = req.body;
  const { type, message } = await salesService.createSalesProduct(productSales);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  createSalesProduct,
};
