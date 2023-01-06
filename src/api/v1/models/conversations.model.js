const db = require('@src/db/postgres.db');

module.exports = {
  createConversation: async (id, shopid, userid, create) => {
    try {
      const statement = `
      INSERT INTO conversations(id, shopid, userid, create, update)
      VALUES ($1, $2, $3, $4, $4)
      RETURNING *
      `;

      const result = await db.require(statement, [id, shopid, userid, create]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  // getIdByShopId: async (shopid) => {
  //   try {
  //     const statement = `
  //     SELECT id
  //     FROM conversations
  //     WHERE shops_id=$1
  //     `;

  //     const result = await db.query(statement, [shopid]);

  //     if (result.rows.length > 0) return result.rows[0].id;
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  // getIdByUserId: async (userid) => {
  //   try {
  //     const statement = `
  //     SELECT id
  //     FROM conversations
  //     WHERE users_id=$1
  //     `;

  //     const result = await db.query(statement, [userid]);

  //     if (result.rows.length > 0) return result.rows[0].id;
  //     return null;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  getIdByShopIdUserId: async (shopid, userid) => {
    try {
      const statement = `
      SELECT id
      FROM conversations
      WHERE shops_id = $1 and  users_id=$2
      `;

      const result = await db.query(statement, [shopid, userid]);

      if (result.rows.length > 0) return result.rows[0].id;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getCreateAtById: async (id) => {
    try {
      const statement = `
      SELECT create_at
      FROM conversations
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].create_at;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getUpdateAtById: async (id) => {
    try {
      const statement = `
      SELECT update_at
      FROM conversations
      WHERE id=$1
      `;

      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows[0].update_at;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findByUserId: async (userid) => {
    try {
      const statement = `
      SELECT *
      FROM conversations
      WHERE userid=$1
      ORDER BY update_at des
      `;

      const result = await db.query(statement, [userid]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findByShopId: async (shopid) => {
    try {
      const statement = `
      SELECT *
      FROM conversations
      WHERE shopid=$1
      ORDER BY update_at des
      `;

      const result = await db.query(statement, [shopid]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  updateConversation: async (id, time) => {
    try {
      const statement = `
            UPDATE conversations
            SET update_at = $2
            WHERE id=$1
        `;
      const result = await db.query(statement, [id, time]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const statement = `
        DELETE FROM conversations
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
  // delete all conversations of an userid
  deleteByUserId: async (userid) => {
    try {
      const statement = `
        DELETE FROM conversations
        WHERE users_id = $1
        RETURNING *;
        `;
      const result = await db.query(statement, [userid]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  // delete all conversations of a shopid
  deleteByShopId: async (shopid) => {
    try {
      const statement = `
        DELETE FROM conversations
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
  deleteAll: async () => {
    try {
      const statement = `
        DELETE FROM conversations
        RETURNING *;
        `;
      const result = await db.query(statement, []);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
};
