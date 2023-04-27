const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { allProducts, newProduct } = require('./mocks/products.model.mock');

describe('Testando a camada  model ', function () {
  it('exibindo todos os produtos', async function () {

    sinon.stub(connection, 'execute').resolves([allProducts]);

    const result = await productsModel.findAllProducts();

    expect(result).to.be.an('array');
    expect(result).to.have.length(3);
    expect(result).to.be.deep.equal(allProducts);
  });

  it('listando apenas um produto', async function () {

    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);

    const result = await productsModel.findProductById(1);

    expect(result).to.be.deep.equal(allProducts[0]);
  });

  describe('Cadastro de um novo produto com a funcao ccreateProduct', function () {
    it('Cadastrando um novo produto', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
      // Act
      const result = await productsModel.createProduct(newProduct);
      // Assert
      expect(result).to.equal(42);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});