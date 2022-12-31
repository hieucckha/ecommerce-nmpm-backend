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
    const { shopId } = req.query;

    const result = await shopService.getInfoShop(shopId);

    res.status(200).json({
      status: 'Success',
      info: result,
    });
  },
  checkShop: async (req, res, next) => {
    const { userId } = req.query;

    const result = await shopService.checkUserHasShop(userId);

    if (result === null)
      return res.status(400).json({
        status: 'Fail',
        message: `User with id:${userId} not had shop`,
      });
    res.status(200).json({
      status: 'Success',
      message: `User with id:${userId} had shop`,
    });
  },
};
