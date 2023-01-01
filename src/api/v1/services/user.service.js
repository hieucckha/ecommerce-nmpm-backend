/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userModel = require('../models/user.model');
const usersModel = require('../models/users.model');

module.exports = {
  createUser: async (username, email, password, name, address) => {
    const userId = uuidv4();
    const id = await usersModel.createAccount(
      userId,
      username,
      email,
      password,
      name,
      address
    );

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
  getInfor: async (id) => {
    try {
      const infor = await usersModel.getInfo(id);
      console.log(infor);
      if (infor) return infor;
    } catch (err) {
      console.log('get information for user ###', err);
    }

    return null;
  },
};
