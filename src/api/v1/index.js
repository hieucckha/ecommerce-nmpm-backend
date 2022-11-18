/* eslint-disable global-require */
const express = require('express');

const router = express.Router();

const routes = [require('./routes/util.route'), require('./routes/auth.route')];

router.use(routes);

module.exports = router;
