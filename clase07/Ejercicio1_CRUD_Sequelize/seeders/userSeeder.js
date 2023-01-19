const { User } = require("../models");
const faker = require("faker");
const { fake } = require("faker");
faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 1; i <= 16; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.datatype.number({ min: 18, max: 65 }),
    });
  }

  await User.bulkCreate(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
