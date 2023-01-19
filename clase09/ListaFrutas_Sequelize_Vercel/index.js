const { config } = require("dotenv");
config();

const app = require("./server");

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () =>
  console.log(`¡Servidor corriendo en el puerto ${PORT}!`)
);
