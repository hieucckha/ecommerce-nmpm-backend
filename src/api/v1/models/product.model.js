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
  create: async (
    productId,
    shopId,
    categoryId,
    name,
    description,
    image,
    price,
    remainingStock
  ) => {
    try {
      const sql = `
        INSERT INTO products (product_id, shop_id, category_id, name, description, image, price, remaining_stock, rating)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;

      const result = await db.none(sql, [
        productId,
        shopId,
        categoryId,
        name,
        description,
        image,
        price,
        remainingStock,
        null,
      ]);
    } catch (err) {
      console.log(err);
    }
  },
};
