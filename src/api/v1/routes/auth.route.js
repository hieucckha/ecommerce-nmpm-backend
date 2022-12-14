const express = require('express');

const authController = require('../controllers/auth.controller');
const userService = require('../services/user.service');
const passport = require('../middlewares/passport.middleware');

const router = express.Router();

// #TODO: SEE passportJS custom callback
router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log(user, info);
      return res.status(400).json({
        status: 'Failed',
        message: 'Not found user',
      });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.status(200).json({
        status: 'Success',
        message: 'Login success',
        user,
      });
    });
  })(req, res, next);
});
router.post('/logout', authController.logout);
router.post('/signup', authController.signup);

module.exports = router;
