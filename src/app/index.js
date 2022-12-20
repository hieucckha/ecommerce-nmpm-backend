const express = require('express');

const app = express();

// common middleware
app.use(require('./middleware.app'));

// route
app.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'Success',
    message: 'This is from index base :p',
  });
});
// app.use('/api/v1', require('../api/v1'));

// catch error
// app.use(require('./error.app'));

module.exports = app;
