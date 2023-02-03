const faker = require("faker");
faker.locale = "es";
const { User } = require("../models");

module.exports = async () => {
  const users = [];
  for (let i = 1; (i = 10); i++) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.datatype.number(),
    });
  }
  await User.bulkCreate(users); // creo varios usuarios simultáneamente por defecto (datos base)

  console.log("[Database] Se corrió el seeder de Users.");
};
