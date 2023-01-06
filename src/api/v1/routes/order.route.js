const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/order', orderController.getCurrentOrder);
router.get('/order/user/getList', orderController.getUserOrders);
router.get('/order/shop/getList', orderController.getShopOrders);

router.post('/order/user/create', orderController.createOrder);

router.patch('/order/shop/updateStatus', orderController.updateStatus);

module.exports = router;
