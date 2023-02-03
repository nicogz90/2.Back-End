const { Sequelize } = require("sequelize");

// Importamos todas las funciones de los modelos
const { createModel } = require("./Fruit");

const connectionConfig = {
  host: process.env.DB_HOST, // Dirección del servidor
  port: process.env.DB_PORT, // Puerto del servidor
  dialect: process.env.DB_CONNECTION, // Tipo de base de datos
  logging: false, // Deshabilitamos la salida por consola
};

if (connectionConfig.dialect === "postgres") {
  connectionConfig.dialectModule = require("pg");
}

// Creamos la conexión con la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Nombre de usuario
  process.env.DB_PASS, // Contraseña
  connectionConfig
);

// Creamos los modelos utilizando la conexión

const Fruit = createModel(sequelize);

// Exportamos los modelos
module.exports = {
  Fruit,
  sequelize,
};
