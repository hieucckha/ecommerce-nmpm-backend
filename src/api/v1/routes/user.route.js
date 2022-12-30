const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/view_info', userController.viewInfo);
// router.patch('update_user',userController.updateUser);

module.exports = router;
