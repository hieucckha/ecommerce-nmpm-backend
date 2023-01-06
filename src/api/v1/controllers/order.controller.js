const orderService = require('../services/order.service');
const productService = require('../services/product.service');
const shopService = require('../services/shop.service');
const userService = require('../services/user.service');

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
    const { orderId } = req.query;

    const result = await orderService.getCurrentOrder(orderId);

    if (result.length == 0)
      return res.status(200).json({ status: 'Success', order: null });

    const order = new Object();

    order.orderId = result[0].order_id;
    order.userId = result[0].user_id;
    order.shopId = result[0].shop_id;
    order.orderTime = result[0].order_time;
    order.status = result[0].status;
    order.total = result[0].total;
    order.address = result[0].address;
    order.listProduct = [];

    for (const product of result) {
      const productInfo = await productService.getInfo(product.product_id);

      const tempProduct = new Object();
      tempProduct.productId = product.product_id;
      tempProduct.name = productInfo.name;
      tempProduct.quantity = product.quantity;

      order.total += product.unit_price * product.quantity;

      order.listProduct.push(tempProduct);
    }

    res.status(200).json({ status: 'Success', order });
  },
  getUserOrders: async (req, res, next) => {
    const { userId } = req.query;

    const result = await orderService.getUserOrders(userId);

    const orders = new Map();
    for (const product of result) {
      const productInfo = await productService.getInfo(product.product_id);

      if (orders.has(product.order_id)) {
        const orderInfo = orders.get(product.order_id);

        const tempProduct = new Object();
        tempProduct.productId = productInfo.product_id;
        tempProduct.name = productInfo.name;
        tempProduct.quantity = product.quantity;

        orderInfo.total += tempProduct.quantity * product.unit_price;

        orderInfo.listProduct.push(tempProduct);
      } else {
        const shopInfo = await shopService.getInfoShop(product.shop_id);

        const temp = new Object();
        temp.orderId = product.order_id;
        temp.userId = product.user_id;
        temp.shopId = product.shop_id;
        temp.shopName = shopInfo.name;
        temp.orderTime = product.order_time;
        temp.status = product.status;
        temp.total = product.total;
        temp.address = product.address;
        temp.listProduct = [];

        const tempProduct = new Object();
        tempProduct.productId = productInfo.product_id;
        tempProduct.name = productInfo.name;
        tempProduct.quantity = product.quantity;

        temp.total += tempProduct.quantity * product.unit_price;

        temp.listProduct.push(tempProduct);

        orders.set(product.order_id, temp);
      }
    }

    const listOrders = Array.from(orders.values());

    res.status(200).json({ status: 'Success', listOrders });
  },
  getShopOrders: async (req, res, next) => {
    const { shopId } = req.query;

    const result = await orderService.getShopOrders(shopId);

    const orders = new Map();
    for (const product of result) {
      const productInfo = await productService.getInfo(product.product_id);

      if (orders.has(product.order_id)) {
        const orderInfo = orders.get(product.order_id);

        const tempProduct = new Object();
        tempProduct.productId = productInfo.product_id;
        tempProduct.name = productInfo.name;
        tempProduct.quantity = product.quantity;

        orderInfo.total += tempProduct.quantity * product.unit_price;

        orderInfo.listProduct.push(tempProduct);
      } else {
        const userInfo = await userService.getInfor(product.user_id);

        const temp = new Object();
        temp.orderId = product.order_id;
        temp.userId = product.user_id;
        temp.username = userInfo.username;
        temp.shopId = product.shop_id;
        temp.orderTime = product.order_time;
        temp.status = product.status;
        temp.total = product.total;
        temp.address = product.address;
        temp.listProduct = [];

        const tempProduct = new Object();
        tempProduct.productId = productInfo.product_id;
        tempProduct.name = productInfo.name;
        tempProduct.quantity = product.quantity;

        temp.total += tempProduct.quantity * product.unit_price;

        temp.listProduct.push(tempProduct);

        orders.set(product.order_id, temp);
      }
    }

    const listOrders = Array.from(orders.values());

    res.status(200).json({ status: 'Success', listOrders });
  },
  createOrder: async (req, res, next) => {
    const { userId, address, products } = req.body;

    const listShop = new Map();
    for (const product of products) {
      const productInfo = await productService.getInfo(product.productId);

      const temp = {};
      temp.productId = productInfo.product_id;
      temp.unitPrice = product.unitPrice;
      temp.quantity = product.quantity;

      if (listShop.has(productInfo.shop_id)) {
        const listProduct = listShop.get(productInfo.shop_id);

        listProduct.push(temp);
      } else {
        const listProduct = [];
        listProduct.push(temp);

        listShop.set(productInfo.shop_id, listProduct);
      }
    }

    for (let [shopId, listProduct] of listShop.entries()) {
      await orderService.createOrderShop(userId, shopId, address, listProduct);
    }

    res.status(200).json({ status: 'Success' });
  },
  updateStatus: async (req, res, next) => {
    const { orderId, status } = req.body;

    await orderService.updateStatus(orderId, status);

    res.status(200).json({ status: 'Success' });
  },
};
