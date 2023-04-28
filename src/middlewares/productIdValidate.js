const productIdValidate = (req, res, next) => {
  const productSales = req.body;
  for (let index = 0; index < productSales.length; index += 1) {
    if (productSales[index].productId === undefined) {
      return res.status(404)
        .json({ message: 'Product not found' });
    }
  }

  return next();
};

module.exports = productIdValidate;
