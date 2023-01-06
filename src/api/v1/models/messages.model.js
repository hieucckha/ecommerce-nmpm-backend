const db = require('@src/db/postgres.db');

module.exports = {
  createMessage: async (id, time, type, message) => {
    try {
      const statement = `
      INSERT INTO messages (conversations_id, create_at, type, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `;

      const result = await db.query(statement, [id, time, type, message]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getMessagesByIdTime: async (id, time) => {
    try {
      const statement = `
      SELECT message
      FROM messages
      WHERE conversations_id = $1 and create_at = $2
      `;

      const result = await db.query(statement, [id, time]);

      if (result.rows.length > 0) return result.rows[0].message;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getTypeByIdTime: async (id, time) => {
    try {
      const statement = `
      SELECT type
      FROM messages
      WHERE conversations_id = $1 and create_at = $2
      `;

      const result = await db.query(statement, [id, time]);

      if (result.rows.length > 0) return result.rows[0].type;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteConversation: async (id) => {
    try {
      const statement = `
        DELETE FROM messages
        WHERE conversation_id = $1
        RETURNING *;
        `;
      const result = await db.query(statement, [id]);

      if (result.rows.length > 0) return result.rows;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteAll: async () => {
    try {
      const statement = `
        DELETE FROM messages
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
