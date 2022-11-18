const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const session = require('express-session');
const passport = require('passport');
const RedisStore = require('connect-redis')(session);
const redisClient = require('../db/redis.db');

const { KEY_SESSION } = require('../configs/dotenv.config');

module.exports = [
  morgan('dev'),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  compression({
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) return false;

      return compression.filter(req, res);
    },
  }),
  session({
    secret: KEY_SESSION,
    store: new RedisStore({ client: redisClient }),
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 30 * 1000,
    },
  }),
  passport.initialize(),
  passport.session(),
];
