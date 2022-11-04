const express = require('express');
const morgan = require('morgan');

module.exports = (app) => {
  // for logger
  app.use(morgan('dev'));

  // for parse json
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
};
