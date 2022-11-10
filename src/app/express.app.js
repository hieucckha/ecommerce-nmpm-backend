const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const passport = require('passport');

const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('../db/redis.db');

const { KEY_SESSION } = require('../configs/dotenv.config');

module.exports = {
  attachMiddleware: (app) => {
    // for logger
    app.use(morgan('dev'));
    // for parse json
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    // for compress response
    app.use(
      compression({
        threshold: 100 * 1000,
        filter: (req, res) => {
          if (req.headers['x-no-compression']) return false;

          return compression.filter(req, res);
        },
      })
    );

    // for session
    app.use(
      session({
        secret: KEY_SESSION,
        store: new RedisStore({ client: redisClient }),
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false,
          httpOnly: true,
          maxAge: 30 * 1000,
        },
      })
    );

    app.use(passport.initialize());
    app.use(passport.session());
  },
  passport,
};
