const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const { allProducts, productCreated, validProduct, newProduct, invalidProduct } = require('./mocks/products.service.mock');

describe('Testando a camada  service ', function () {
  it('exibindo todos os produtos', async function () {

    sinon.stub(productsModel, 'findAllProducts').resolves(allProducts);

    const result = await productsService.findAllProducts();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal(allProducts);
    expect(result).to.be.an('object');
  });

  it('Exibindo uma lista sem produtos', async function () {

    sinon.stub(productsModel, 'findAllProducts').resolves([]);

    const result = await productsService.findAllProducts();

    expect(result).to.be.an('object');

  });

  it('listando apenas um produto', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(allProducts[0]);

    const result = await productsService.findProductById(1);

    expect(result.type).to.equal(null);
    expect(result.message).to.be.deep.equal(allProducts[0]);
  });

  it('caso um produto nao exista', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(undefined);


    const result = await productsService.findProductById(1);

    expect(result.type).to.equal(404);
    expect(result.message).to.equal('Product not found');
  });

  describe('cadastro de um produto com valores válidos', function () {
    it('retorna o id de um produto cadastrado', async function () {
      sinon.stub(productsModel, 'createProduct').resolves(6);
      sinon.stub(productsModel, 'findProductById').resolves(productCreated);

      const result = await productsService.createProduct(validProduct);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(productCreated);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});