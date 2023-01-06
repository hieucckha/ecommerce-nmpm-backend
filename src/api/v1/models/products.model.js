const db = require('../../../db/postgres.db');
// chua xong dau
module.exports = {
  createProduct: async (
    id,
    shopid,
    name,
    description,
    price,
    remaining,
    classify
  ) => {
    try {
      const statement = `
      INSERT INTO shops(id, shops_id, name, description, image, price, remaining_stock, classify)
      VALUES ($1, $2, $3, $4, '{"image":[]}'::jsonb, $5,$6, $7)
      RETURNING *
      `;

      const result = await db.require(statement, [
        id,
        shopid,
        name,
        description,
        price,
        remaining,
        classify,
      ]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findByShopId: async (shopid) => {
    try {
      const statement = `
      SELECT *
      FROM products
      WHERE shops_id=$1
      `;

      const result = await db.query(statement, [shopid]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findStockingByShopId: async (shopid) => {
    try {
      const statement = `
      SELECT *
      FROM products
      WHERE shops_id=$1 and remaining_stock > 0
      `;

      const result = await db.query(statement, [shopid]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getProductById: async (id) => {
    try {
      const statement = `
      SELECT *
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getShopIdById: async (id) => {
    try {
      const statement = `
      SELECT shops_id
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].shops_id;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getNameById: async (id) => {
    try {
      const statement = `
      SELECT name
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].name;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getDescriptionById: async (id) => {
    try {
      const statement = `
      SELECT description
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].description;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getPriceById: async (id) => {
    try {
      const statement = `
      SELECT price
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].price;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getStockById: async (id) => {
    try {
      const statement = `
      SELECT remaining_stock
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].remaining_stock;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getClassifyById: async (id) => {
    try {
      const statement = `
      SELECT classify
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].classify;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getRatingById: async (id) => {
    try {
      const statement = `
      SELECT rating
      FROM products
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].rating;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getAvgRatingOfShop: async (shopid) => {
    try {
      const statement = `
      SELECT avg(rating) as avgRating
      FROM products
      WHERE shops_id=$1 and rating != null
      `;

      const result = await db.query(statement, [shopid]);

      if (result.rows.length > 0) return result.rows[0].avgRating;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  updateInfoProduct: async (id, name, description, price, stock) => {
    try {
      const statement = `
            UPDATE product
            SET name=$2, description=$3, price=$4, stock=$5
            WHERE id=$1
        `;
      const result = await db.query(statement, [
        id,
        name,
        description,
        price,
        stock,
      ]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteImage: async (id) => {
    try {
      const statement = `
            UPDATE product
            SET name=$2, description=$3, price=$4, stock=$5
            WHERE id=$1
        `;
      const result = await db.query(statement, [
        id,
        name,
        description,
        price,
        stock,
      ]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const statement = `
        DELETE FROM products
        WHERE id = $1
        RETURNING *;
        `;
      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteByShopId: async (shopid) => {
    try {
      const statement = `
        DELETE FROM products
        WHERE shops_id = $1
        RETURNING *;
        `;
      const result = await db.query(statement, [shopid]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
};
