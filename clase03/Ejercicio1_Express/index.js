const express = require("express");
const app = express(); // Crea un instancia de Express.
const routes = require("./routes");

routes(app);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000!"));
