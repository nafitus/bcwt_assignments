'use strict';
const userModel =  require('../models/userModel');

const users = userModel.users;

const getUsers = (req, res) => {
  // remove the password property from all user items in the array
  users.map(user => {
    delete user.password;
    return user;
  });
  res.json(users);
};

const getUser = (req, res) => {
  // choose only one object with matching id
  const user = users.filter(user => req.params.userId == user.id)[0];
  if (user) {
    delete user.password;
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const createUser = (req, res) => {
  //console.log(req.body);
  const userInfo = `username: ${req.body.name}, email: ${req.body.email}`;
  res.send('Adding new user ' + userInfo);
  // TODO: add new user to DB
};

const modifyUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {
  getUser,
  getUsers,
  modifyUser,
  createUser,
  deleteUser
};