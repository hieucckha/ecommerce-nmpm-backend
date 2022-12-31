const express = require('express');

const authController = require('../controllers/auth.controller');
const passport = require('../middlewares/passport.middleware');

const router = express.Router();

// #TODO: SEE passportJS custom callback
router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({
        status: 'Failed',
      });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});
router.post('/logout', authController.logout);
router.post('/signup', authController.signup);

module.exports = router;
