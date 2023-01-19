const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(routes);

module.exports = app;
