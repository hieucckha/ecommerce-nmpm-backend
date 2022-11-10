const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/user', userController.getUser);
router.get('/users', userController.getAllUser);

module.exports = router;
