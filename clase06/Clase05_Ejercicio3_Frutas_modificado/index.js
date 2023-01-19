const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const host = "http://localhost";
const port = process.env.SERVER_PORT;

/* ---------- */
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");
/* ---------- */

app.use(
  express.urlencoded({ extended: true })
); /* Con este código le estamos diciendo a Express que cuando lleguen datos de tipo
“URL-Encoded” se debe crear un atributo body dentro del objeto request: req.body */

const { crearConexion } = require("./utils/database"); // conexión con base de datos

const obtenerFrutas = async (req, res) => {
  const conexion = await crearConexion();
  const query = "SELECT * FROM frutas";
  const [rows] = await conexion.query(query);
  res.render("home", { frutas: rows });
};

const crearFrutas = async (req, res) => {
  try {
    const nuevaFruta = req.body.nuevaFruta;
    if (nuevaFruta) {
      const conexion = await crearConexion();
      const query = "INSERT INTO frutas (name) VALUES (?)"; // Consultas con Placeholders: Una forma muy cómoda de realizar consultas (queries) es usando placeholders usando el símbolo de "?" con la gran ventaja de que los valores se 'escapan' automáticamente (más seguro)
      await conexion.query(query, [nuevaFruta]);
    }
    res.redirect("/frutas");
  } catch (error) {
    res.redirect("/error");
  }
};

app.get("/", (req, res) => {
  res.send(`<a href="/frutas">Ir a la página de frutas</a>`);
});
app.get("/frutas", obtenerFrutas); /* con GET la informacion esta en el query */
app.post("/frutas", crearFrutas); /* con POST la informacion esta en el body */

app.listen(port, () => console.log(`Servidor corriendo en ${host}:${port}`));
