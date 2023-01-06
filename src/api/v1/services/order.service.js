const { v4: uuidv4 } = require('uuid');

const orderModel = require('../models/orders.model');
const orderDetailModel = require('../models/order_detail.model');

module.exports = {
  getCurrentOrder: async (orderId) => {
    const result = await orderModel.getByOrderId(orderId);

    return result;
  },
  createOrderShop: async (userId, shopId, address, listProduct) => {
    const orderId = uuidv4();
    const result = await orderModel.createOrder(
      orderId,
      shopId,
      userId,
      new Date().toISOString().slice(0, -1),
      0,
      null,
      address
    );

    let total = 0;

    console.log('Result###', result);

    listProduct.forEach(async (product) => {
      await orderDetailModel.createDetail(
        orderId,
        product.productId,
        product.unitPrice,
        product.quantity
      );
      total += product.unitPrice * product.quantity;
    });

    await orderModel.updateTotal(orderId, total);
  },
  getUserOrders: async (userId) => {
    const result = await orderModel.getOrdersByUserId(userId);
    return result;
  },
  getShopOrders: async (shopID) => {
    const result = await orderModel.getOrdersByShopId(shopID);
    return result;
  },
  updateStatus: async (orderId, status) => {
    const result = await orderModel.updateStatus(orderId, status);
    return result;
  },
};
