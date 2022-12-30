/* eslint-disable camelcase */
const createError = require('http-errors');
const shopService = require('../services/shop.service');

module.exports = {
  createShop: async (req, res, next) => {
    const { userId, name, image } = req.body;

    const check = await shopService.checkUserHasShop(userId);
    if (check !== null)
      return next(createError.Conflict(`User has a shop :${check.name}`));

    const result = await shopService.create(userId, name, image);

    return res.status(200).json({ status: 'Success' });
  },
  getInfoShop: async (req, res, next) => {
    const { shopId } = req.body;
    console.log(shopId);
    const result = await shopService.getInfoShop(shopId);
  },
};
