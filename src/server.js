require('module-alias/register'); // for import module alias '@src'

const dotenvConfig = require('@src/configs/dotenv.config');
const redisClient = require('@src/db/redis.db');
const app = require('./app');

const port = dotenvConfig.PORT || 3000;

// start express server
app.listen(port, () => {
  console.log(`Server start at port:${port}`);
});

process.on('SIGINT', () => {
  app.close(() => console.log(`exits server express`));
});
