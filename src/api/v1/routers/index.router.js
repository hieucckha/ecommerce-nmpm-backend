const express = require("express")
const router = express.Router()

const userRouter = require('./user.router')

router.use(userRouter)

router.get('/', (req, res, next) => {
    res.send("Hello this is index of api")
})

module.exports = router