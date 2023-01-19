const http = require("http");
// importamos la funcion que exportamos del archivo routes.js
const routes = require("./routes");
const domain = "http://localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  // pasamos el objeto request y response a la funcion routes
  routes(req, res);
});

server.listen(port, () => {
  console.log(`Servidor escuchando en ${domain}:${port}.`);
});
