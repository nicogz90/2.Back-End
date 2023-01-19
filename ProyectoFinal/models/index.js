const { Sequelize } = require("sequelize");
const userModelBuilder = require("./User");
const jobModelBuilder = require("./Job");

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

const Job = jobModelBuilder(sequelize);
const User = userModelBuilder(sequelize);

module.exports = {
  sequelize,
  Job,
  User,
};
