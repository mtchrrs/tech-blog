const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "mtchrrs",
    password: "mtchrrs",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
