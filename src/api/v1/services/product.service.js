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
};
