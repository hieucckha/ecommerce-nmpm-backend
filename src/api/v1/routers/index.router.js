const express = require('express');

const router = express.Router();

const utilRouter = require('./util.router');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');

router.use(utilRouter);
router.use(authRouter);
router.use(userRouter);

module.exports = router;
