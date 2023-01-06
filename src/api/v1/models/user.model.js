const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const db = require('@src/db/postgres.db');

module.exports = {
  getID: async (username) => {
    try {
      const sql = `
        SELECT user_id
        FROM users
        WHERE username = $1
      `;

      const result = await db.one(sql, [username]);

      return result.user_id;
    } catch (err) {
      console.log('userModel.getID###', err);
    }

    return null;
  },
  getHashPassword: async (id) => {
    try {
      const { password } = await db.one(
        `
        SELECT password
        FROM users
        WHERE user_id=$1
      `,
        [id]
      );
      return password;
    } catch (err) {
      console.log('userModel.getHashPassword###', err);
    }

    return null;
  },
  create: async (username, password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const { id } = await db.one(
        `
        INSERT INTO users (user_id, username, password)\
        VALUES ($1, $2, $3)\
        RETURNING id
      `,
        [uuidv4(), username, hashPassword]
      );

      return id;
    } catch (err) {
      console.log('userModel.create###', err);
    }

    return null;
  },
};
