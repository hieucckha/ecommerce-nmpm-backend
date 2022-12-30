/* eslint-disable global-require */
const express = require("express");

const router = express.Router();

const routes = [
  require("./routes/auth.route"),
  require("./routes/util.route"),
  require("./routes/order.route"),
  require("./routes/shop.route"),
  require("./routes/user.route")
];

router.use(routes);

module.exports = router;
