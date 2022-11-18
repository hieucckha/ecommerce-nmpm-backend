const passport = require('passport');
const LocalStrategy = require('passport-local');

const { checkUserExists, checkUserValid } = require('../services/user.service');

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      const id = await checkUserExists(username);
      if (!id) return cb(null, false);

      const isValid = await checkUserValid(id, password);
      if (!isValid) return cb(null, false);

      return cb(null, {
        id,
        username,
      });
    } catch (err) {
      console.log(err);
    }

    return cb(null, false);
  })
);

passport.serializeUser((user, cb) => {
  console.log('serializeUser###', user);
  cb(null, { id: user.id, username: user.username });
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser###', user);
  done(null, user);
});

module.exports = passport;
