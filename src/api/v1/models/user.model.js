const db = require('@src/db/postgres.db');

module.exports = {
  getId: async (uname) => {
    try {
      const statement = `
        SELECT id FROM users WHERE uname=$1
      `;

      const result = await db.query(statement, [uname]);

      if (result.rows.length > 0) return result.rows[0].id;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getPasswd: async (uname) => {
    try {
      const statement = `
        SELECT passwd FROM users WHERE uname=$1
      `;

      const result = await db.query(statement, [uname]);

      if (result.rows.length > 0) return result.rows[0].passwd;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  getAll: async () => {
    try {
      const statement = `
        SELECT * FROM users
      `;

      const result = await db.query(statement);
      return result.rows;
    } catch (err) {
      throw new Error(err);
    }
  },
  create: async (id, name, passwd) => {
    try {
      const statement = `
          INSERT INTO users (id, uname, passwd)
          VALUES ($1, $2, $3)
          RETURNING *
        `;
      const result = await db.query(statement, [id, name, passwd]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  update: async (id, name, pw) => {
    try {
      const statement = `
            UPDATE users 
            SET uname=$2, passwd=$3
            WHERE id=$1    
        `;
      const result = await db.query(statement, [id, name, pw]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
};
