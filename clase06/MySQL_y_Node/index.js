const mysql = require("mysql2/promise"); // importamos el sub-modulo promise del modulo mysql2

/* CON MODULO MYSQL2 */
// creamos conexion con la base de datos
/* const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_test",
});
// Recordar que para poder conectarnos a la BD no sólo debe estar instalado MySQL sino que también debe estar corriendo.
// Recordar que la base de datos db_test debe estar creada previamente.

// nos conectamos
connection.connect(function (err) {
  if (err) throw err;
  console.log("¡Nos conectamos a la BD!");

  // consultamos datos de la tabla 'usuarios' creada en la base de datos 'db_test'
  connection.query("SELECT * FROM usuarios", (err, datos) => {
    if (err) throw err;
    console.log(datos);
  });
}); */

/* CON MODULO PROMISE DE MYSQL2 */
async function main() {
  try {
    // al trabajar con async/await, no es necesario hacer el '.connect', ya que '.createConnection' ya crea y a su vez realiza la conexión una vez se cumple la promesa
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "db_test",
    });

    // una vez conectado, consultar datos de la tabla 'usuarios'
    const [datos, fields] = await connection.query("SELECT * FROM usuarios"); // el 2do parametro contiene info extra sobre los datos
    console.log(datos);
  } catch (error) {
    console.log("Algo salió mal...", error);
  }
}

main();
