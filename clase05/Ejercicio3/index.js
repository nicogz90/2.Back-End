const express = require("express");
const app = express();

const host = "http://localhost";
const port = 3000;

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(
  express.urlencoded({ extended: true })
); /* Con este código le estamos diciendo a Express que cuando lleguen datos de tipo
“URL-Encoded” se debe crear un atributo body dentro del objeto request: req.body */

const frutas = ["Manzana", "Pera", "Frutilla"];

app.get("/", (req, res) => {
  res.send(`<a href="/frutas">Ir a la página de frutas</a>`);
});

app.get("/frutas", (req, res) => {
  res.render("home", { frutas });
}); /* con GET la informacion esta en el query */

app.post("/frutas", (req, res) => {
  const nuevaFruta = req.body.nuevaFruta;
  if (nuevaFruta) {
    frutas.push(nuevaFruta);
  }
  res.redirect("/frutas"); // los redirect son siempre a GET
}); /* con POST la informacion esta en el body */

app.listen(port, () => console.log(`Servidor corriendo en ${host}:${port}`));
