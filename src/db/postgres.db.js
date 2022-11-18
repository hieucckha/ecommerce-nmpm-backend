const pgp = require('pg-promise')();
const { postgres: credential } = require('../configs/credentialDB.config');

const db = pgp(credential);

module.exports = db;
