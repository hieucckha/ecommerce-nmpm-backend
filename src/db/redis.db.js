const Redis = require('ioredis');
const { redis } = require('../configs/credentialDB.config');

const client = new Redis(redis);

module.exports = client;
