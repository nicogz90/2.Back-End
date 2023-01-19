/**
 * Los seeds se corren con el comando: `npx sequelize-cli db:seed:all`.
 *
 * ⚠️ Es necesario crear el modelo `User` antes de poder ejectuar este seed.
 */

"use strict";

const { User } = require("../models");
const { hashPassword } = require("../utils/password");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.create({
      firstname: "Maria",
      lastname: "Perez",
      email: "admin@admin.com",
      password: await hashPassword("admin123"),
      avatar: "avatar_1.png",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
