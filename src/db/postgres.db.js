const { Pool, Client } = require('pg');
const { postgres } = require('../configs/credentialDB.config');

const pool = Pool(postgres);

module.exports = {
  query: async (text, params, callback) => pool.query(text, params, callback),
};
