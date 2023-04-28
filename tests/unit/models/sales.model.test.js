const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { saleJson, newSales, allSales } = require('./mocks/sales.model.mock')

describe('Testando a camada sales model ', function () {
  describe('Cadastro de um novo produto com a funcao createSales', function () {
    it('Cadastrando uma nova venda', async function () {

      sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

      const result = await salesModel.createSales();

      expect(result).to.equal(42);
    });
  });

  describe('Testes de unidade sales model', function () {
    it('Recuperando a lista de vendas', async function () {
 
      sinon.stub(connection, 'execute').resolves([allSales]);

      const result = await salesModel.getAllSales();

      expect(result).to.be.deep.equal(allSales);
      expect(result).to.be.an('array');
      expect(result).to.have.length(3);
    });

    it('listando sem nenhum dado', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);

      const sale = await salesModel.getAllSales();

      expect(sale).to.be.an('array');
      expect(sale).to.have.length(0);
    });

    it('Recuperando uma venda a partir do seu id', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([allSales[0]]);
      // Act
      const result = await salesModel.getSalesById(1);
      // Assert
      expect(result).to.be.deep.equal(allSales[0]);
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