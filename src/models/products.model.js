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

const createProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?);',
    [name],
  );

  return insertId;
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
};
