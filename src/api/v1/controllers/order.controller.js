const orderService = require('../services/order.service');
const orderDetailService = require('../services/order.service');

module.exports = {
  /*
  listProductShop: json
  {
    userId: string,
    address: string,
    listShop: [
      {
        shopId: string,
        listProductOrder: [
          {
            productId: string,
            unitPrice: int;
            quantity: int
          },
          ...
        ]
      },
      ...
    ]
  }
   */
  getCurrentOrder: async (req, res, next) => {
    const { orderId } = req.body;

    const result = await orderService.getCurrnetOrder(orderId);

    res.status(200).json({ status: 'Success', order: result });
  },
  getUserOrders: async (req, res, next) => {
    const { userId } = req.body;

    const result = await orderService.getUserOrders(userId);

    res.status(200).json({ status: 'Success', listOrders: result });
  },
  getShopOrders: async (req, res, next) => {
    const { shopId } = req.body;

    const result = await orderService.getShopOrders(shopId);

    res.status(200).json({ status: 'Success', listOrders: result });
  },
  createOrder: async (req, res, next) => {
    const { userId, address, listShop } = req.body;

    for (const shop of listShop) {
      await orderService.createOrderShop(
        userId,
        shop.shopId,
        address,
        shop.listProductOrder
      );
    }

    res.status(200).json({ status: 'Success' });
  },
  updateStatus: async (req, res, next) => {
    const { orderId, status } = req.body;

    await orderService.updateStatus(orderId, status);

    res.status(200).json({ status: 'Success' });
  },
};
