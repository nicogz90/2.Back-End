const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const { sequelize } = require("./models");

// Sincronizamos la base de datos
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Base sincronizada");
  })
  .catch(() => {
    console.log("Error al sincronizar");
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
