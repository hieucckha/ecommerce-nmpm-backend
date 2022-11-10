const express = require('express');

const router = express.Router();

const utilController = require('../controllers/util.controller');

router.get('/', utilController.getIndex);
router.get('/sessions', utilController.getSessions);

module.exports = router;
