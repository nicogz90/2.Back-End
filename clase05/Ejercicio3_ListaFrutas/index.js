const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const nunjucks = require("nunjucks");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(routes);

app.listen(PORT, () =>
  console.log(`¡Servidor corriendo en el puerto ${PORT}!`)
);
