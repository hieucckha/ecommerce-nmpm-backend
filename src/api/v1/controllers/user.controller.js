const userService = require('../services/user.service');

module.exports = {
  getUser: async (req, res, next) => {
    res.send('Hello');
  },
  getAllUser: async (req, res, next) => {
    console.log('req.session :>> ', req.session);
    if (req.isAuthenticated()) {
      try {
        const users = await userService.getAllUsers();

        res.json({
          msg: 'All Users',
          users,
        });
      } catch (err) {
        console.error(err);
        next(err);
      }
    } else {
      res.json({
        status: 'failed',
        message: 'Missing',
      });
    }
  },
};
