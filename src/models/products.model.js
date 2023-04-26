const connection = require('./connection');

const findAllProducts = async () => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return product;
};

const findProductById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [productId],
  );
  return product;
};

module.exports = {
  findAllProducts,
  findProductById,
};
