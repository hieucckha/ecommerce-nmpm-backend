/* eslint-disable camelcase */
const createError = require("http-errors");
const userService = require("../services/user.service");

module.exports = {
  viewInfo: async (req, res, next) => {
    const { userId } = req.body;
    const result = await userService.getInfor(userId);
    if (!result)
      return next(createError.Conflict(`No user with id :${userId}`));

    return res.json({ result });
  }
  // updateUser: async (req, res, next) => {
  //   const { user } = req.body;
  //   const result = await userService.getInfor(user_id);
  //   if (result)
  //     return next(createError.Conflict(`No user with id :${user_id}`));
  //
  //   return res.json({ result });
  // },
};
