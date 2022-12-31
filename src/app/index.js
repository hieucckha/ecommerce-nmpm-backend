const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());

// common middleware
app.use(require('./middleware.app'));

// route
app.use('/api/v1', require('../api/v1'));

// catch error
app.use(require('./error.app'));

module.exports = app;
