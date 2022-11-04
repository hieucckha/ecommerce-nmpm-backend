const express = require('express');
const useMiddlewareExpress = require('./express.app');
const indexV1Router = require('../api/v1/routers/index.router');

const app = express();
useMiddlewareExpress(app);

app.use('/api/v1', indexV1Router);

// routing and log error
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message,
  });
});

module.exports = app;
