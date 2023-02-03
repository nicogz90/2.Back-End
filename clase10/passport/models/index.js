const { Sequelize } = require("sequelize");

// Importamos todas las funciones para crear nuestros modelos
const createUserModel = require("./User");

// creamos una conexion a la base de datos
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: usuarios
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

// creamos los modelos utilizando la conexion de sequelize
const User = createUserModel(sequelize);

module.exports = {
  sequelize,
  User,
};
