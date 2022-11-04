require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'))

const indexV1Router = require("./api/v1/routers/index.router")

app.use('/api/v1', indexV1Router)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})