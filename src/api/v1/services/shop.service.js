const { v4: uuidv4 } = require('uuid');
const shopModule = require('../models/shops.model');

module.exports = {
  checkUserHasShop: async (userId) => {
    const id = await shopModule.getShopIdById(userId);
    return id;
  },
  getInfoShop: async (shopId) => {
    const result = await shopModule.getInfoShop(shopId);
    return result;
  },
  create: async (userId, name, image) => {
    const shopId = uuidv4();

    const id = await shopModule.createShop(shopId, userId, name, 0, image);

    return id;
  },
};
