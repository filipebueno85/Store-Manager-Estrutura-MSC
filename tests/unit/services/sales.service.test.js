const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { saleJson, objSale, newSales, allSales, saleJson2 } = require('./mocks/sales.service.mock');
const { salesService } = require('../../../src/services');
const { saleUpdate, saleJonUpdate } = require('./mocks/products.service.mock');

describe('Testando a camada sales service ', function () {
  describe('cadastro de um produto com valores válidos', function () {
    it('retorna o id de um produto cadastrado', async function () {
      sinon.stub(salesModel, 'createSales').resolves(3);
      sinon.stub(salesModel, 'createSalesProduct').resolves(newSales);


      const result = await salesService.createSalesProduct(saleJson2);
      // console.log(result);
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

    it('retorna uma venda por id', async function () {
    
      sinon.stub(salesModel, 'getSalesById').resolves(allSales[0]);

      const result = await salesService.getSalesById(1);
      // console.log(result);
      expect(result.type).to.equal(null);
      expect(result.message).to.equal(allSales[0]);
    });
  });
  
  describe('Deletando uma venda', function () {
    it('deletando uma venda com sucesso', async function () {
      // sinon.stub(salesModel, 'deleteSales').resolves(allSales)
      sinon.stub(salesModel, 'deleteSales').resolves(true);

      const result = await salesService.deleteSales(1);

      expect(result.message).to.be.equal(true);

    });
  });

  describe('atualizando uma venda', function () {
    it('atualizando uma venda com sucesso', async function () {

      sinon.stub(salesModel, 'updateSales').resolves([{ productId: 1, quantity: 10 }]);

      const result = await salesService.updateSales(1, saleJonUpdate);

      expect(result.message).to.be.deep.equal(saleUpdate);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});