const { v4: uuidv4 } = require('uuid');
const productModel = require('../models/product.model');

module.exports = {
  getInfo: async (productId) => {
    try {
      return await productModel.getInfo(productId);
    } catch (err) {
      return null;
    }
  },
  getListProduct: async () => {
    try {
      return await productModel.getListProduct();
    } catch (err) {
      return null;
    }
  },
  getListShop: async (shopId) => {
    try {
      return await productModel.getListShop(shopId);
    } catch (err) {
      return null;
    }
  },
  create: async (
    shopId,
    categoryId,
    name,
    description,
    image,
    price,
    remainingStock
  ) => {
    try {
      await productModel.create(
        uuidv4(),
        shopId,
        categoryId,
        name,
        description,
        image,
        price,
        remainingStock
      );
    } catch (err) {
      return null;
    }
  },
};
