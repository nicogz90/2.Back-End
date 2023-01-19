/**
 * Esta migración se generó con el comando:
 * npx sequelize-cli migration:generate --name create-jobs-table
 *
 * Luego las migraciones se corren con el comando:
 * npx sequelize-cli db:migrate
 *
 * Para borrar todas las migraciones, ejecutar:
 * npx sequelize-cli db:migrate:undo:all
 *
 * Todo en uno:
 * npx sequelize-cli db:migrate:undo:all; npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all;
 */

"use strict";

const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("jobs", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      applyEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("jobs");
  },
};
