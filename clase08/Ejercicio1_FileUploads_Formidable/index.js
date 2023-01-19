const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
  }
);

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  console.log(`¡Las tablas fueron creadas!`);
});

app.listen(`${process.env.PORT}`, () =>
  console.log(`Servidor corriendo en ${process.env.HOST}:${process.env.PORT}`)
);
