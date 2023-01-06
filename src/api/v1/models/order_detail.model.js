const db = require('@src/db/postgres.db');

module.exports = {
  createDetail: async (orderId, productId, price, quantity) => {
    try {
      const statement = `
      INSERT INTO order_detail (order_id, product_id, unit_price, quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING order_id;
      `;

      const result = await db.one(statement, [
        orderId,
        productId,
        price,
        quantity,
      ]);

      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
};
