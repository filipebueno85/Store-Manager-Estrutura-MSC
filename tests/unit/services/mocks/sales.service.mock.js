const newSales = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
}

const allSales = [
  {
    "saleId": 1,
    "date": "2023-04-28T12:45:32.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-04-28T12:45:32.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-04-28T12:45:32.000Z",
    "productId": 3,
    "quantity": 15
  }
]
const deletedSales = [
  {
    "saleId": 1,
    "date": "2023-04-28T12:45:32.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-04-28T12:45:32.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const objSale = {
  "productId": 1,
  "quantity": 1
};

const saleJson = [
  {
    "productId": 1,
    "quantity": 1
  }
]

const saleJson2 = [
  {
    "productId": 1,
    "quantity": 1
  }
  // {
  //   "productId": 2,
  //   "quantity": 5
  // }
]

module.exports = {
  newSales,
  saleJson,
  saleJson2,
  objSale,
  allSales,
  deletedSales,
};
