const { Pool } = require('pg');
const { postgres } = require('../configs/credentialDB.config');

const pool = new Pool(postgres);

module.exports = {
  query: async (text, params, callback) => pool.query(text, params, callback),
};
