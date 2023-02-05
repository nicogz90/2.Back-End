const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 15],
          isAlpha: true,
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 15],
          isAlpha: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          min: 8,
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return User;
};
