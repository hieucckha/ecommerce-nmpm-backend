const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/product/getInfo', productController.getInfo);
router.get('/product/getList', productController.getList);
router.get('/product/getListShop', productController.getListShop);

module.exports = router;
