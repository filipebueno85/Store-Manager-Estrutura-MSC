const allProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const saleJonUpdate = [
  {
    "productId": 1,
    "quantity": 10
  }
]

const newProduct = {
  name: 'Coleira de gato'
}

const productCreated = {
  id: 6,
  name: 'Coleira de gato'
};

const saleUpdate = {
  "saleId": 1,
  "itemsUpdated": [
    {
      "productId": 1,
      "quantity": 10
    }
  ]
};

const validProduct = 'Coleira de gato';
const invalidProduct = 'as';

module.exports = {
  allProducts,
  productCreated,
  saleJonUpdate,
  newProduct,
  validProduct,
  invalidProduct,
  saleUpdate,
};
