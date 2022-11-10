const express = require('express');

const passport = require('../middlewares/passport.middleware');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', passport.authenticate('local'), authController.login);
// TODO: refactor here
router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    return res.redirect('/');
  });
});

module.exports = router;
