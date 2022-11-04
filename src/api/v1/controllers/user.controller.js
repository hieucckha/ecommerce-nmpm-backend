const userService = require('../services/user.service');

module.exports = {
  getAllUser: async (req, res, next) => {
    const users = await userService.getAllUser();

    res.json({
      msg: 'All Users',
      users,
    });
  },
};
