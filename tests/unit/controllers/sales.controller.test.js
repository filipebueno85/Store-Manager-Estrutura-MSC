const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleJson2, newSales, allSales } = require('./mocks/sales.controller.mock');
const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { salesController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

describe('Testando a camada  sales controller', function () {
  describe('Cadastrando uma venda nova', function () {
    it('Salvar ao enviar dados corretos!', async function () {
      const res = {};
      const req = {
        body: saleJson2,
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon
        .stub(salesService, 'createSalesProduct')
        .resolves({ type: null, message: { id: 3, itemsSold: saleJson2 } });

      await salesController.createSalesProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newSales);
    });
  });
  describe('buscando todas as vendas', function () {
    it('Deve retornar o status 200 e e a lista de vendas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getAllSales').resolves({ type: null, message: allSales });

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSales);
      expect(res).to.be.an('object');
    });

    it('ao passar um id inválido deve retornar um erro', async function () {

      const res = {};
      const req = {
        params: { id: '1447' }, 
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon
        .stub(salesService, 'getSalesById')
        .resolves({ type: 404, message: 'Sale not found' });


      await salesController.getSalesById(req, res);
    
      expect(res.status).to.have.been.calledWith(404);

      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
