const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { saleJson, newSales } = require('./mocks/sales.model.mock')

describe('Testando a camada sales model ', function () {
  describe('Cadastro de um novo produto com a funcao createSales', function () {
    it('Cadastrando uma nova venda', async function () {

      sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

      const result = await salesModel.createSales();

      expect(result).to.equal(42);
    });
  });

  // describe('Cadastro de um novo produto com a funcao createSalesProduct', function () {
  //   it('Cadastrando uma nova venda', async function () {

  //     sinon.stub(connection, 'execute').resolves(newSales);

  //     const result = await salesModel.createSalesProduct(saleJson);

  //     expect(result).to.be.equal(newSales);
  //     expect(result).to.be.an('object');
  //   });
  // });

  afterEach(function () {
    sinon.restore();
  });
});