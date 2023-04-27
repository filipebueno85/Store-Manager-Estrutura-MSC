const { salesModel, productsModel } = require('../models');

const createSales = async () => {
  const products = await salesModel.createSales();

  return { type: null, message: products };
};

const createSalesProduct = async (productArray) => {
  const findProductId = await Promise.all(productArray.map( async (product) => {
    const productById = await productsModel.findProductById(product.productId);
    return productById;
  }));
  
  if (findProductId.some((id) => id === undefined)) return { type: 404, message: 'Product not found' };
  const saleId = await salesModel.createSales();
  const productSales = await Promise.all(productArray.map(async (product) => {
    const addSalesProduct = await salesModel
      .createSalesProduct(saleId, product.productId, product.quantity);
    return addSalesProduct;
  }));

  return { type: null, message: { id: saleId, itemsSold: productSales } };
};

module.exports = {
  createSales,
  createSalesProduct,
};
