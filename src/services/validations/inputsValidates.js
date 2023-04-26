const { addProductSchemaRequired, addProductSchemaLength } = require('./schemas');

const newProductValidate = (name) => {
  const { error } = addProductSchemaRequired.validate({ name });

  if (error) return { type: 400, message: '"name" is required' };

  return { type: null, message: ' ' };
};

const newProductValidateLength = (name) => {
  const { error } = addProductSchemaLength.validate({ name });

  if (error) return { type: 422, message: '"name" length must be at least 5 characters long' };

  return { type: null, message: ' ' };
};

module.exports = {
  newProductValidate,
  newProductValidateLength,
}