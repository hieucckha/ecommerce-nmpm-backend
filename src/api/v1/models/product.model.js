const db = require('@src/db/postgres.db');

module.exports = {
  getInfo: async (productId) => {
    try {
      const statement = `
        SELECT *
        FROM products
        WHERE product_id = $1
      `;
      const result = await db.one(statement, [productId]);

      return result;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
  getListProduct: async () => {
    try {
      const statement = `
        SELECT *
        FROM products
      `;

      const result = await db.manyOrNone(statement);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  getListShop: async (shopId) => {
    try {
      const statement = `
        SELECT *
        FROM products
        WHERE shop_id = $1
      `;
      console.log('shopId in model###', shopId);
      const result = await db.many(statement, [shopId]);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
};
