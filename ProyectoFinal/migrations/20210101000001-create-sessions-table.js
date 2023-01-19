/**
 * Esta migración se generó con el comando:
 * npx sequelize-cli migration:generate --name create-sessions-table
 *
 * Luego las migraciones se corren con el comando:
 * npx sequelize-cli db:migrate
 *
 * Para borrar todas las migraciones, ejecutar:
 * npx sequelize-cli db:migrate:undo:all
 *
 * Todo en uno:
 * npx sequelize-cli db:migrate:undo:all; npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all;
 *
 * -----------------------------------
 * Esta tabla la necesita la librería:
 * connect-session-sequelize
 * -----------------------------------
 */

"use strict";

const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("sessions", {
      sid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      data: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("sessions");
  },
};
