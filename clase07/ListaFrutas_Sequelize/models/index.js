const { Sequelize } = require("sequelize");

// Importamos todas las funciones de los modelos
const createFruitModel = require("./Fruit");

// Creamos la conexión con la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Nombre de usuario
  process.env.DB_PASS, // Contraseña
  {
    host: process.env.DB_HOST, // Dirección del servidor
    dialect: "mysql", // Tipo de base de datos
    logging: false, // Deshabilitamos la salida por consola
  }
);

// Creamos los modelos utilizando la conexión

const Fruit = createFruitModel(sequelize);

// Exportamos los modelos
module.exports = {
  Fruit,
  sequelize,
};
