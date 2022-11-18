const bcrypt = require('bcrypt');

const userModel = require('../models/user.model');

module.exports = {
  createUser: async (username, password) => {
    const id = await userModel.create(username, password);

    return id;
  },
  checkUserExists: async (username) => {
    try {
      const id = await userModel.getID(username);
      if (id) return id;
    } catch (err) {
      console.log('checkUserExists###', err);
    }

    return null;
  },
  checkUserValid: async (id, password) => {
    try {
      const hashPassword = await userModel.getHashPassword(id);
      const rtn = await bcrypt.compare(password, hashPassword);
      console.log(rtn);
      if (rtn) {
        return true;
      }
    } catch (err) {
      console.log('checkUserValid###', err);
    }

    return false;
  },
};
