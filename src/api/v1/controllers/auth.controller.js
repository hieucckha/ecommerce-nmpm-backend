const createHttpError = require('http-errors');

const authService = require('../services/auth.service');
const userService = require('../services/user.service');

module.exports = {
  login: async (req, res, next) => {
    try {
      res.json({
        status: 'success',
        message: 'Login successful',
      });
    } catch (err) {
      next(err);
    }
  },
  // TODO: add passport session in here
  register: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) throw new createHttpError.BadRequest();

      const isExist = await authService.checkUnameExist(username);
      if (isExist)
        throw createHttpError.Conflict(`${username} is ready been register`);

      const user = await userService.create(username, password);
      console.log('user REGISTER :>> ', user.uname, typeof user);
      req.login(
        {
          uname: user.uname,
          passwd: user.passwd,
          active: true,
        },
        (err) => {
          if (err) console.log(err); // Set in here
        }
      );

      res.json({
        status: 'success',
        elements: user,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
