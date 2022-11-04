require('module-alias/register'); // for import module alias '@src'

const dotenvConfig = require('@src/configs/dotenv.config');
const app = require('./app');

const port = dotenvConfig.PORT || 3000;

app.listen(port, () => {
  console.log(`Server start at port:${port}`);
});
