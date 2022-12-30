const createError = require('http-errors');

const userService = require('../services/user.service');

module.exports = {
  logout: (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/checkhealth');
    });
  },
  signup: async (req, res, next) => {
    const { username, email, password, name, address } = req.body;
    if (!username || !password || !email || !name || !address)
      return next(createError.BadRequest());

    const isExist = await userService.checkUserExists(username);
    if (isExist)
      return next(createError.Conflict(`${username} is ready been register`));

    const id = await userService.createUser(
      username,
      email,
      password,
      name,
      address
    );

    return req.login(
      {
        id,
        username,
      },
      (err) => {
        if (err) next(err);
        res.redirect('/checkhealth');
      }
    );
  },
};
