const http = require("http");

// importamos el objeto persona del archivo persona.js
const persona = require("./persona");
const domain = "http://localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(persona));
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor escuchando en ${domain}:${port}.`);
});
