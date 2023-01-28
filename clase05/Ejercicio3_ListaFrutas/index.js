const express = require("express");
const path = require("path");
const app = express();
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3000;
const nunjucks = require("nunjucks");
const routes = require("./routes");

app.use(
  express.urlencoded({ extended: true })
); /* Con este código le estamos diciendo a Express que cuando lleguen datos de tipo
“URL-Encoded” se debe crear un atributo body dentro del objeto request: req.body */

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(routes);

app.listen(PORT, () => console.log(`¡Servidor corriendo en ${HOST}:${PORT}`));
