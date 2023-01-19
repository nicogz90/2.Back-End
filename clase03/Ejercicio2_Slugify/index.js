const http = require("http");
const slugify = require("slugify");

slugify.extend({ "&": "y" });

const resultado = slugify("¡Quiero viajar a Bélgica & España! 🇧🇪🇪🇸", {
  replacement: "-", // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: true, // convert to lower case, defaults to `false`
  strict: true, // strip special characters except replacement, defaults to `false`
});

console.log(resultado);

// Opcional:
// Se crea un server el cual retornará el resultado.

const server = http.createServer((req, res) => {
  console.log("Alguien accedió al servidor");
  res.end(resultado);
});

server.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080.");
});
