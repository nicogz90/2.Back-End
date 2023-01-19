require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const nunjucks = require("nunjucks");

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(routes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
