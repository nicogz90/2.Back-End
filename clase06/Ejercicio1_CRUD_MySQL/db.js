const mysql = require("mysql2/promise");

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

module.exports.customQuery = async (sqlString, values) => {
  const connection = await mysql.createConnection(connectionConfig);
  const [results, fields] = await connection.execute(sqlString, values);
  // console.log("resultados", results);
  // console.log("fields", fields);
  return results;
};
