// Importamos los tipos de datos de Sequelize
// Importamos el Modelo base de Sequelize
const { DataTypes, Model } = require("sequelize");

// Definimos una función que crea un modelo de Sequelize
// Parámetros:
// - sequelize: conexión con la base de datos
const createModel = (sequelize) => {
  // Definimos el modelo que extiende del Modelo base de Sequelize
  class Fruit extends Model {}

  // Definimos los campos del modelo
  Fruit.init(
    {
      // Campo id
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // Campo nombre
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: sequelize, // Conectamos el modelo con la conexión
    }
  );

  // Retornamos el modelo creado
  return Fruit;
};

// Exportamos la función para crear el modelo
module.exports = createModel;
