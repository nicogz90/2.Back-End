const faker = require("faker");
const { User } = require("../models");
const { hashSync } = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      email: `email${i}@test.com`,
      password: hashSync(`${i}${i}${i}${i}${i}${i}${i}${i}`, 10),
      firstname: faker.lorem.word(1),
      lastname: faker.lorem.word(1),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Usuarios.");
};
