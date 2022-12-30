const { faker } = require('@faker-js/faker');
const express = require('express');

const usersModel = require('./api/v1/models/users.model');
const shopsModel = require('./api/v1/models/shops.model');

const shopService = require('./api/v1/services/shop.service');

const app = express();
const port = 3000;
// add account random
app.get('/user/add', async (req, res) => {
  for (let i = 0; i < 2; i++) {
    const userid = faker.datatype.uuid();
    const firstname = faker.name.firstName(faker.name.sex());
    const lastname = faker.name.lastName();
    const email = faker.internet.email(firstname, lastname);
    const uname = faker.internet.userName(firstname, lastname);
    const passwd = faker.internet.password(20);
    let address;
    if (faker.random.numeric() % 2 === 0) {
      address = null;
    } else {
      address = faker.address.streetAddress();
    }
    console.log(`${i}`);
    console.log(`ID: ${userid}`);
    console.log(`username: ${uname}`);
    console.log(`email: ${email}`);
    console.log(`password: ${passwd}`);
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`address: ${address}`);
    const bb = usersModel.createAccount(
      userid,
      uname,
      email,
      passwd,
      `${firstname} ${lastname}`,
      address
    );
    console.log(bb);
  }
  const result = await usersModel.findAll();
  res.send(result);
});

// delete all account from user
app.get('/user/delete_all', async (req, res) => {
  const query = await usersModel.deleteAll();
  res.send(query);
});

// find all account
app.get('/user/find_all', async (req, res) => {
  const query = await usersModel.findAll();
  console.dir(query);
  res.send(query);
});

// SHOP
// create shop
app.get('/shop/create', async (req, res) => {
  // eslint-disable-next-line camelcase
  const shop_id = faker.datatype.uuid();
  const query = await shopsModel.createShop(
    shop_id,
    '01108568-3aa9-4d93-970d-744003f52947',
    faker.commerce.productName(),
    0,
    faker.image.fashion()
  );
  console.log(query);
  res.send(query);
});

// find all account
app.get('/shop/id', async (req, res) => {
  const query = await shopService.checkUserHasShop('001');
  console.log(query);
  res.send(query);
});

app.listen(port || 3000, () => {
  console.log(`Server start at port:${port}`);
});
