const { Sequelize } = require("sequelize");

// importarmos la funcion de crear el modelo de Fruta
const { createModel } = require("./Fruit");

// Crea la conexion con la base datos, mediante Squelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: true,
  }
);

// Aca creo el modelo
const Fruit = createModel(sequelize);

module.exports = {
  sequelize,
  Fruit,
};
