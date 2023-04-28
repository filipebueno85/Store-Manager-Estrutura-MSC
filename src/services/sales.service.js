const { salesModel, productsModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();

  // if (!sales) return { type: 404, message: 'Sale not found' };

  return { type: null, message: sales };
};

const getSalesById = async (saleId) => {
  const sales = await salesModel.getSalesById(saleId);
  // console.log(sales);
  return { type: null, message: sales };
};

const createSales = async () => {
  const products = await salesModel.createSales();

  return { type: null, message: products };
};

const createSalesProduct = async (productArray) => {
  const findProductId = await Promise.all(productArray.map(async (product) => {
    const productById = await productsModel.findProductById(product.productId);
    return productById;
  }));
  
  if (findProductId
    .some((id) => id === undefined)) return { type: 404, message: 'Product not found' };
  const saleId = await salesModel.createSales();
  const productSales = await Promise.all(productArray.map(async (product) => {
    const addSalesProduct = await salesModel
      .createSalesProduct(saleId, product.productId, product.quantity);
    return addSalesProduct;
  }));

  return { type: null, message: { id: saleId, itemsSold: productSales } };
};

const deleteSales = async (id) => {
  const sales = await salesModel.deleteSales(id);

  return { type: null, message: sales };
};

const updateSales = async (saleId, productArray) => {
  const findSaleId = await Promise.all(productArray.map(async (product) => {
    const productById = await productsModel.findProductById(product.productId);
    return productById;
  }));

  if (findSaleId
    .some((id) => id === undefined)) return { type: 404, message: 'Product not found' };
  // const saleID = await salesModel.getSalesById(saleId);
  await Promise.all(productArray.map(async (product) => {
    const updateSalesProduct = await salesModel
      .updateSales(saleId, product.productId, product.quantity);
    return updateSalesProduct;
  }));

  return { type: null, message: { saleId, itemsUpdated: productArray } };
};

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
  createSalesProduct,
  deleteSales,
  updateSales,
};
