const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleJson2, newSales } = require('./mocks/sales.controller.mock');
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

    afterEach(function () {
      sinon.restore();
    });
  });
  });

