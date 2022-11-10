const LocalStrategy = require('passport-local');

const { passport } = require('@src/app/express.app');

const { checkUnameExist, checkUserValid } = require('../services/auth.service');

passport.use(
  // eslint-disable-next-line consistent-return
  new LocalStrategy(async (username, password, done) => {
    try {
      const isExist = await checkUnameExist(username);
      if (!isExist) return done(null, false);

      const isValid = await checkUserValid(username, password);
      if (!isValid) {
        return done(null, false);
      }
    } catch (err) {
      console.log(err);
    }
    console.log('verify :>> ', username);

    return done(null, {
      username,
      password,
    });
  })
);

passport.serializeUser((user, done) => {
  console.log('serializeUser :>> ', user, typeof user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser :>> ', user, typeof user);
  done(null, user);
});

module.exports = passport;
