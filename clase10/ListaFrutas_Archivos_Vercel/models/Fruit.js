// Importamos los tipos de datos de sequelize
// Importamos el modelo base de sequelize
const { DataTypes, Model } = require("sequelize");

const createModel = (sequelize) => {
  class Fruit extends Model {}

  Fruit.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
    }
  );

  return Fruit;
};

module.exports = {
  createModel,
};
