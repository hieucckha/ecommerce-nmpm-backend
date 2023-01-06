const db = require('../../../db/postgres.db');

module.exports = {
  createShop: async (id, userId, name, status, image) => {
    try {
      const statement = `
          INSERT INTO shops(shop_id, user_id, name, status, image)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
      `;

      const result = await db.one(statement, [id, userId, name, status, image]);

      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  getShopIdById: async (id) => {
    try {
      const statement = `
          SELECT shop_id
          FROM shops
          WHERE user_id = $1
      `;

      const result = await db.oneOrNone(statement, [id]);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  getInfoShop: async (shopId) => {
    try {
      const statement = `
          SELECT *
          FROM shops
          Where shop_id = $1
      `;

      const result = await db.oneOrNone(statement, [shopId]);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  // WHERE shop_id = '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6'
  // findByUserId: async (userid) => {
  //   try {
  //     const statement = `
  //         SELECT *
  //         FROM shops
  //         WHERE user_id = $1
  //     `;
  //
  //     const result = await db.query(statement, [userid]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // getAllShop: async () => {
  //   try {
  //     const statement = `
  //         SELECT *
  //         FROM shops
  //     `;
  //
  //     const result = await db.query(statement, []);
  //
  //     if (result.length > 0) return result;
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // updateName: async (id, name) => {
  //   try {
  //     const statement = `
  //         UPDATE shops
  //         SET name=$2
  //         WHERE shop_id = $1
  //     `;
  //     const result = await db.query(statement, [id, name]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // updateImage: async (id, image) => {
  //   try {
  //     const statement = `
  //         UPDATE shops
  //         SET image=$2
  //         WHERE shop_id = $1
  //     `;
  //     const result = await db.query(statement, [id, image]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // updateStatus: async (id, status) => {
  //   try {
  //     const statement = `
  //         UPDATE shops
  //         SET status=$2
  //         WHERE shop_id = $1
  //     `;
  //     const result = await db.query(statement, [id, status]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // updateRating: async (id, rating) => {
  //   try {
  //     const statement = `
  //         UPDATE shops
  //         SET rating=$2
  //         WHERE shop_id = $1
  //     `;
  //     const result = await db.query(statement, [id, rating]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // deleteShopByUserId: async (userid) => {
  //   try {
  //     const statement = `
  //         DELETE
  //         FROM shops
  //         WHERE user_id = $1
  //         RETURNING *;
  //     `;
  //     const result = await db.query(statement, [userid]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // deleteById: async (id) => {
  //   try {
  //     const statement = `
  //         DELETE
  //         FROM shops
  //         WHERE shop_id = $1
  //         RETURNING *;
  //     `;
  //     const result = await db.query(statement, [id]);
  //
  //     if (result.rows.length > 0) return result.rows[0];
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }
};
