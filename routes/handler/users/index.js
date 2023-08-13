const register = require("./register");
const login = require("./login");
const update = require("./update");
const getUserById = require("./getUser");
const getUsers = require("./getUsers");
const logout = require("./logout");

module.exports = {
  register,
  login,
  update,
  getUserById,
  getUsers,
  logout
};
