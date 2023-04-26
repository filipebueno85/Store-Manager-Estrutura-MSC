const { productsModel } = require('../models');

const findAllProducts = async () => {
  const products = await productsModel.findAllProducts();

  return { type: null, message: products };
};

const findProductById = async (productId) => {
  const products = await productsModel.findProductById(productId);
  
  if (!products) return { type: 404, message: 'Product not found' };

  return { type: null, message: products };
};

module.exports = {
  findAllProducts,
  findProductById,
};