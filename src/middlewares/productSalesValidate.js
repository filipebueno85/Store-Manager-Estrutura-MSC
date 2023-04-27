const productSalesValidate = (req, res, next) => {
  const productSales = req.body;
  for (let index = 0; index < productSales.length; index += 1) {
    if (!productSales[index].productId) {
      return res.status(400)
      .json({ message: '"productId" is required' });
    } 
  }

  return next();
};

module.exports = productSalesValidate;
