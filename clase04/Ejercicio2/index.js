const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

const routes = require("./routes");
app.use(routes);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
