const bcrypt = require("bcrypt");
const db = require("../../../db/postgres.db");

module.exports = {
  getIdByUsername: async (uname) => {
    try {
      const statement = `
          SELECT user_id
          FROM users
          WHERE username = $1
      `;

      const result = await db.one(statement, [uname]);

      return result.user_id;
    } catch (err) {
      throw new Error(err);
    }
  },
  getUsernameById: async (id) => {
    try {
      const statement = `
          SELECT username
          FROM users
          WHERE user_id = $1
      `;

      const result = await db.one(statement, [id]);

      return result.username;
    } catch (err) {
      throw new Error(err);
    }
  },
  getPasswordById: async (id) => {
    try {
      const statement = `
          SELECT password
          FROM users
          WHERE user_id = $1
      `;

      const result = await db.one(statement, [id]);

      return result.password;
    } catch (err) {
      throw new Error(err);
    }
  },
  getNameById: async (id) => {
    try {
      const statement = `
          SELECT name
          FROM users
          WHERE user_id = $1
      `;

      const result = await db.one(statement, [id]);

      return result.name;
    } catch (err) {
      throw new Error(err);
    }
  },
  getAddrById: async (id) => {
    try {
      const statement = `
          SELECT address
          FROM users
          WHERE user_id = $1
      `;

      const result = await db.one(statement, [id]);
      return result.address;
    } catch (err) {
      throw new Error(err);
    }
  },
  getInfo: async (id) => {
    try {
      const statement = `
          SELECT *
          FROM users
          WHERE user_id = $1
      `;

      const result = await db.oneOrNone(statement, [id]);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  addAddress: async (id, addr) => {
    try {
      const statement = `
          UPDATE users
          SET address = JSONB_SET(
                  address,
                  '{addr}',
                  (SELECT (address - > 'addr') || TO_JSONB($2::jsonb)
                   FROM users
                   WHERE user_id = $1),
                  false
              )
          WHERE user_id = $1 RETURNING *
      `;
      const result = await db.one(statement, [id, addr]);
      console.log(result.address.addr);
      return result.address;
    } catch (err) {
      throw new Error(err);
    }
  },
  createAccount: async (id, uname, email, password, name, address) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const statement = `
          INSERT INTO users (user_id, username, email, password, name, address, is_lock)
          VALUES ($1, $2, $3, $4, $5, $6, false) RETURNING *
      `;

      const result = await db.query(statement, [
        id,
        uname,
        email,
        hashPassword,
        name,
        address
      ]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  updateInfoAccount: async (userId, uname, email, password, name) => {
    try {
      const statement = `
          UPDATE users
          SET username = $2,
              email    = $3,
              password = $4,
              name     = $5
          WHERE user_id = $1 RETURNING *;
      `;
      const result = await db.query(statement, [
        userId,
        uname,
        email,
        password,
        name
      ]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findUsernameByID: async (id) => {
    try {
      const statement = `
          SELECT *
          FROM users
          WHERE user_id = $1
      `;

      const result = await db.query(statement, [id]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findIdByUsername: async (uname) => {
    try {
      const statement = `
          SELECT *
          FROM users
          WHERE uname = $1
      `;

      const result = await db.query(statement, [uname]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findIdByEmail: async (email) => {
    try {
      const statement = `
          SELECT *
          FROM users
          WHERE email = $1
      `;

      const result = await db.query(statement, [email]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  findAll: async () => {
    try {
      const statement = `
          SELECT *
          FROM users
      `;

      const result = await db.query(statement, []);
      console.dir(result);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  },
  lockAccount: async (id) => {
    try {
      const statement = `
          UPDATE users
          SET is_lock = true
          WHERE user_id = $1 RETURNING *;
      `;

      const result = await db.query(statement, [id]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  unlockAccount: async (id) => {
    try {
      const statement = `
          UPDATE users
          SET is_lock = false
          WHERE user_id = $1 RETURNING *;
      `;

      const result = await db.one(statement, [id]);

      if (result.length > 0) return result;
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  delete: async (id) => {
    try {
      const statement = `
          DELETE
          FROM users
          WHERE user_id = $1 RETURNING *;
      `;
      const result = await db.query(statement, [id]);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteAll: async () => {
    try {
      const statement = `
          DELETE
          FROM users RETURNING *;
      `;
      const result = await db.query(statement, []);

      if (result.length > 0) return result[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
};
