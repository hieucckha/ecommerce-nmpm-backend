const express = require('express');

const authController = require('../controllers/auth.controller');
const passport = require('../middlewares/passport.middleware');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/checkhealth',
    failureRedirect: '/login',
  })
);
router.post('/logout', authController.logout);
router.post('/signup', authController.signup);

module.exports = router;
