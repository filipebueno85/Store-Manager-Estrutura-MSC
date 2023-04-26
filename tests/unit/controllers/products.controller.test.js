const chai= require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { allProducts } = require('./mocks/product.contoller.mock');

describe('Testando a camada  controller', function () {
  describe('Listando todos os produtos', function () {
    it('Deve retornar o status 200 e a lista', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findAllProducts')
        .resolves({ type: null, message: allProducts });

      await productsController.findAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts);
    });

    describe('Listando apenas um produto', function () {

    it('ao passar um id que não existe no banco deve retornar um erro', async function () {
      // Arrange
      const res = {};
      const req = {
        params: { id: 356 }, 
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findProductById')
        .resolves({ type: 404, message: 'Product not found' });

      await productsController.findProductById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
      
    it('encontrando um produto com sucesso', async function () {
      const res = {};
      const req = {
        params: { id: 1 }, 
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findProductById')
        .resolves({ type: null, message: allProducts[0] });

      await productsController.findProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts[0]);
    });
  });
  });
  afterEach(function () {
    sinon.restore();
  });
  });