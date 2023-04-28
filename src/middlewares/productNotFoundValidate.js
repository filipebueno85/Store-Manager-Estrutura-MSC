const { productsService } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const allProducts = await productsService.findProductById(id);

  if (allProducts.type) return res.status(404).json({ message: 'Product not found' });

  return next();
};