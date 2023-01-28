const express = require("express");
const app = express(); // Crea un instancia de Express.
const PORT = 3000;
const routes = require("./routes");

routes(app);

app.listen(`${PORT}`, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}!`)
);
