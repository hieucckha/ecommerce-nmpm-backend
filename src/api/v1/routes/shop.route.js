const express = require('express');
const shopController = require('../controllers/shop.controller');

const router = express.Router();

router.get('/shop/isShop', shopController.checkShop);
router.get('/shop/info', shopController.getInfoShop);
router.post('/shop/create', shopController.createShop);
router.post('/shop/addProduct', shopController.addProduct);

module.exports = router;
