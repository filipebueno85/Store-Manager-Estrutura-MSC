const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId , sp.quantity
    FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products AS sp
    ON sp.sale_id = s.id ORDER BY sp.sale_id, sp.product_id;`,
  );
  return sales;
};

// const getAllSalesProducts = async () => {
//   const [sales] = await connection.execute(
//     'SELECT * FROM StoreManager.sales_products;',
//   );
//   return sales;
// };

const getSalesById = async (saleId) => {
  const [sale] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId , sp.quantity
    FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products AS sp
    ON sp.sale_id = s.id WHERE sp.sale_id = ? ORDER BY sp.sale_id, sp.product_id;`, [saleId],
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

const updateSales = async (saleId, productId, quantity) => {
  await connection.execute(
    `UPDATE StoreManager.sales_products 
  SET quantity = (?)
  WHERE sale_id = (?) AND product_id = (?);`, [quantity, saleId, productId],
  );
  return { productId, quantity };
};

const deleteSales = async (id) => {
  await connection.execute('DELETE FROM StoreManager.sales WHERE id = ?;', [id]);

  return true;
};

module.exports = {
  getAllSales,
  getSalesById,
  // getAllSalesProducts,
  // getProductSalesById,
  createSales,
  createSalesProduct,
  deleteSales,
  updateSales,
};
