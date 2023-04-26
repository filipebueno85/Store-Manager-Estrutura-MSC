const { productsService } = require('../services');

const findAllProducts = async (_req, res) => {
  const { type, message } = await productsService.findAllProducts();

  if (type) res.status(404).json(message);

  return res.status(200).json(message);
};

const findProductById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.findProductById(id);

  if (type) return res.status(404).json({message});

  return res.status(200).json(message);
};

module.exports = {
  findAllProducts,
  findProductById,
};
