require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const nunjucks = require("nunjucks");
const { sequelize } = require("./models");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

sequelize.sync({ force: false }).then(() => {
  console.log(`¡Las tablas fueron creadas!`);
});

app.use(routes);

app.listen(`${process.env.PORT}`, () =>
  console.log(`Servidor corriendo en ${process.env.HOST}:${process.env.PORT}`)
);
