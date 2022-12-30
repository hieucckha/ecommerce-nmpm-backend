const db = require('@src/db/postgres.db');

module.exports = {
  createRating: async (userid, orderid, productid) => {
    try {
      const statement = `
      INSERT INTO rating(users_id, orders_id, products_id, vote, comment)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `;

      const result = await db.require(statement, [userid, orderid, productid]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getRatingByProductId: async (productid) => {
    try {
      const statement = `

      RETURNING *
      `;

      const result = await db.require(statement, [productid]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
};
