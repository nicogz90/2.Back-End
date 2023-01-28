const express = require("express");
const app = express(); // Crea un instancia de Express.
const PORT = 3000;

const routes = require("./routes"); // importamos las rutas que estan en otro archivo

app.use(routes); // le indicamos a express que utilice dichas rutas

app.listen(`${PORT}`, () =>
  console.log(`¡Servidor corriendo en el puerto ${PORT}!`)
);
