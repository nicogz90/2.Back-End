require("dotenv").config();

const express = require("express");
const app = express();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => console.log(`Servidor corriendo en ${host}:${port}`));
