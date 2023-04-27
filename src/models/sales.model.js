const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales;',
  );
  return sales;
};

const getAllSalesProducts = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products;',
  );
  return sales;
};

const getSalesById = async (saleId) => {
  const [[sale]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?;', [saleId],
  );
  return sale;
};
// const getProductSalesById = async (productId) => {
//   const [[sale]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales_products WHERE product_id = ?;', [productId],
//   );
//   return sale;
// }

const createSales = async () => {
  // const now = new Date();
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES(NOW());',
    [],
  );

  return insertId;
};

const createSalesProduct = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );

  return { productId, quantity };
};

module.exports = {
  getAllSales,
  getSalesById,
  getAllSalesProducts,
  // getProductSalesById,
  createSales,
  createSalesProduct,
};
