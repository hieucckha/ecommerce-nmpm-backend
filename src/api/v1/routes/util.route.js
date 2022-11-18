const express = require('express');

const router = express.Router();

const utilController = require('../controllers/util.controller');

router.get('/checkhealth', utilController.checkHealth);

module.exports = router;
