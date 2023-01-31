const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const { sequelize } = require("./models");

// Sincronizamos la base de datos
sequelize
  .sync({ force: false }) // false (por defecto) >> para que actualice la base de datos, pero no borre al reiniciar
  .then(() => {
    console.log("Base sincronizada");
  })
  .catch((error) => {
    console.log("Error al sincronizar", error);
  });

const app = express();

app.use(express.urlencoded({ extended: true }));

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(routes);

module.exports = app;
