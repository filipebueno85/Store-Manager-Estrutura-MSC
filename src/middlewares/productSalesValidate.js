module.exports = (req, res, next) => {
  const productSales = req.body;
  for (let index = 0; index < productSales.length; index += 1) {
    productSales[index];
    if (!productSales[index].productId) return res.status(400).json({ message: '"productId" is required' });
    if (productSales[index].quantity === undefined) return res.status(400).json({ message: '"quantity" is required' });
    if (productSales[index].quantity < 1) {
      return res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }

  return next();
};