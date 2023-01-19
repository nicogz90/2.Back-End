const express = require("express");
const routes = require("./routes"); // importamos las rutas que estan en otro archivo

const app = express(); // Crea un instancia de Express.

app.use(routes); // le indicamos a express que utilice dichas rutas

app.listen(3000, () => console.log("¡Servidor corriendo en el puerto 3000!"));
