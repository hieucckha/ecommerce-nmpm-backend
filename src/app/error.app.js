const createError = require('http-errors');

module.exports = [
  (req, res, next) => {
    next(createError(404));
  },
  (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(res.locals.error);
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message,
    });
  },
];
