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

const createProduct = async (name) => {
  const product = await productsModel.createProduct(name);
  const newProduct = await productsModel.findProductById(product);

  if (!newProduct) return { type: 500, message: 'error!' };

  return { type: null, message: newProduct };
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
};
