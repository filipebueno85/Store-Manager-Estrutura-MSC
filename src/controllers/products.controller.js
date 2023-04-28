const { productsService } = require('../services');

const findAllProducts = async (_req, res) => {
  const { type, message } = await productsService.findAllProducts();

  if (type) res.status(404).json(message);

  return res.status(200).json(message);
};

const findProductById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.findProductById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productsService.createProduct(name);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);  
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productsService.updateProductById(id, name);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.deleteProduct(id);

  if (type) return res.status(type).json({ message });

  return res.status(204).json(); 
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  updateProductById,
  deleteProduct,
};
