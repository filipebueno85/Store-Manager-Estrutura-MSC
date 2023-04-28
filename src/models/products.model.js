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

const updateProductById = async (id, name) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?);', [name, id],
  );
  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?;', [id]);

  return true;
};

const searchProduct = async (name) => {
  const [result] = await connection.execute(
    `SELECT *
    FROM StoreManager.products WHERE name LIKE '%${name}%';`, [name],
  );

  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  searchProduct,
  updateProductById,
  deleteProduct,
};
