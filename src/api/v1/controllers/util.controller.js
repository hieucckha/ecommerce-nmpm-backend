const redisClient = require('@src/db/redis.db');

module.exports = {
  getIndex: async (req, res, next) => {
    res.send({
      message: 'Is oke',
    });
  },
  getSessions: async (req, res, next) => {
    const keys = await redisClient.keys('*');
    //  Get key
    const values = [];
    for (let key of keys) {
      let value = await redisClient.get(key);
      values.push(value);
    }
    res.send({ keys, values });
  },
};
