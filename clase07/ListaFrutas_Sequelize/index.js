const { config } = require("dotenv");
config();

const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const { sequelize } = require("./models");

const main = async () => {
  // Sincronizamos la base de datos
  await sequelize.sync({
    force: true,
  }); // con "force: true" se borran los datos pre-existentes
  console.log("Base de datos sincronizada");

  // usamos el valor del .env o usamos el valor 3000 por defecto
  const PORT = process.env.SERVER_PORT || 3000;

  const app = express();

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
};

main();
