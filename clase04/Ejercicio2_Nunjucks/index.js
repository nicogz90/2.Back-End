const express = require("express");
const app = express(); // Crea un instancia de Express.
const PORT = 3000;
const routes = require("./routes");
const nunjucks = require("nunjucks");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(routes);

app.listen(`${PORT}`, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}!`)
);
