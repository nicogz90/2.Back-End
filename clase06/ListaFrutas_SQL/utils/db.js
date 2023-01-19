const mysql = require("mysql2/promise");

async function createConn() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: proces.env.DB_NAME,
  });
  return db;
}

module.exports = {
  createConn,
};
