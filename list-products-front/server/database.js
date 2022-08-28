const {faker} = require('@faker-js/faker')
module.exports = function () {

  const data = {
    productsData: [],
  };

  for (let idProduct = 0; idProduct < 300; idProduct++) {
    data.productsData.push({
      id: idProduct,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      imageUrl: "https://picsum.photos/400?random=" + idProduct,
      quantity: faker.random.numeric(),
    });
  }
  return data;
};
