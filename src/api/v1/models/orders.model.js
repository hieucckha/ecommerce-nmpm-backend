const db = require('@src/db/postgres.db');

module.exports = {
  createOrder: async (
    id,
    shopId,
    userId,
    orderTime,
    status,
    total,
    address
  ) => {
    try {
      const statement = `
          INSERT INTO orders (order_id, shop_id, user_id, order_time, status, total, address)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING *
      `;

      const result = await db.oneOrNone(statement, [
        id,
        shopId,
        userId,
        orderTime,
        status,
        total,
        address,
      ]);

      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  updateTotal: async (orderId, total) => {
    try {
      const statement = `
          UPDATE orders
          SET total = $2
          WHERE order_id = $1
          returning total`;

      const result = await db.oneOrNone(statement, [orderId, total]);

      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  getOrdersByUserId: async (userId) => {
    try {
      const statement = `
          SELECT *
          FROM orders
                   join order_detail od on orders.order_id = od.order_id
          where user_id = $1`;

      const result = await db.manyOrNone(statement, [userId]);

      return result;
    } catch (err) {
      // throw new Error(err);
      console.error(err);
    }
  },
  getOrdersByShopId: async (shopId) => {
    try {
      const statement = `
          SELECT *
          FROM orders
          where shop_id = $1`;

      const result = await db.manyOrNone(statement, [shopId]);

      return result;
    } catch (err) {
      // throw new Error(err);
      console.error(err);
    }
  },
  getByOrderId: async (orderId) => {
    try {
      const statement = `
          SELECT *
          FROM orders
          where order_id = $1`;
      const result = await db.oneOrNone(statement, [orderId]);

      return result;
    } catch (err) {
      // throw new Error(err);
      console.error(err);
    }
  },
  updateStatus: async (orderId, status) => {
    try {
      const statement = `
          UPDATE orders
          SET status = $2
          WHERE order_id = $1
          returning order_id, status`;

      const result = await db.oneOrNone(statement, [orderId, status]);

      return result;
    } catch (err) {
      console.error(err);
    }
  },
};
