const bcrypt = require('bcrypt');

const userModel = require('../models/user.model');

module.exports = {
  checkUnameExist: async (uname) => {
    try {
      const id = await userModel.getId(uname);
      if (id) return true;
    } catch (err) {
      throw Error(err.message);
    }

    return false;
  },
  checkUserValid: async (uname, passwd) => {
    try {
      const hashPasswd = await userModel.getPasswd(uname);
      console.log('passwd :>> ', passwd);
      console.log('hashPasswd :>> ', hashPasswd);
      return await bcrypt.compare(passwd, hashPasswd);
    } catch (err) {
      throw Error(err.message);
    }
  },
};
