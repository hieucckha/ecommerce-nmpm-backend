const express = require('express');
const shopController = require('../controllers/shop.controller');

const router = express.Router();

router.post('/shop/create', shopController.createShop);
router.get('/shop/info', shopController.getInfoShop);

module.exports = router;
