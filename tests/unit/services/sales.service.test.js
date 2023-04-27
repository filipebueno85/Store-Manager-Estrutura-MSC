const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { saleJson, objSale, newSales } = require('./mocks/sales.service.mock');
const { salesService } = require('../../../src/services');

describe('Testando a camada sales service ', function () {
  describe('cadastro de um produto com valores válidos', function () {
    it('retorna o id de um produto cadastrado', async function () {
      sinon.stub(salesModel, 'createSales').resolves(3);
      sinon.stub(salesModel, 'createSalesProduct').resolves(newSales);


      const result = await salesService.createSalesProduct(saleJson);
      console.log(result);
      expect(result.type).to.equal(null);
      expect(result.message).to.have.keys('id', 'itemsSold');
    });

  });


  afterEach(function () {
    sinon.restore();
  });
});