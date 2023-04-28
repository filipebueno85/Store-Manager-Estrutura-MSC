const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { saleJson, objSale, newSales, allSales } = require('./mocks/sales.service.mock');
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
  describe('Listando todas as vendas', function () {
    it('a lista vendas é um array', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves(allSales);
      const travel = await salesService.getAllSales();
  
      expect(travel.message instanceof Array).to.equal(true);
    });

    it('retorna a todas as vendas com sucesso', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves(allSales);

      const result = await salesService.getAllSales();
      expect(result.type).to.be.equal(null);
      expect(result.message).to.equal(allSales);
    });
});
  afterEach(function () {
    sinon.restore();
  });
});