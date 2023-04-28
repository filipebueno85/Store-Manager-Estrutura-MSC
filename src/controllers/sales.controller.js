const { salesService } = require('../services');

const getAllSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();

  if (type) res.status(type).json(message);

  return res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesService.getSalesById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const createSalesProduct = async (req, res) => {
  const productSales = req.body;
  const { type, message } = await salesService.createSalesProduct(productSales);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  getAllSales,
  getSalesById,
  createSalesProduct,
};
