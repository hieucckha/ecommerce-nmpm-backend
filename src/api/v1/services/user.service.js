const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userModel = require('../models/user.model');

module.exports = {
  getAllUsers: async () => {
    try {
      return await userModel.getAll();
    } catch (err) {
      throw new Error(err);
    }
  },
  create: async (uname, passwd) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashPasswd = await bcrypt.hash(passwd, salt);

      return userModel.create(uuidv4(), uname, hashPasswd);
    } catch (err) {
      throw new Error(err);
    }
  },
};
