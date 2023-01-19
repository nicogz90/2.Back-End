const mysql = require("mysql2/promise");

const crearConexion = async () => {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  return db;
};

module.exports = { crearConexion };
