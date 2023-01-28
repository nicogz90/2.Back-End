const http = require("http"); // 'require' es una funcion de Node que se utiliza para importar módulos; en este caso el módulo 'http'
var fs = require("fs"); // file system

function requestListener(req, res) {
  // callback: función (en este caso de 2 variables: request y response) que va a recibir la creación del servidor, que contiene la respuesta
  /* res.end ("Hola mundo!") */

  fs.writeFile("archivo.txt", "Hola mundo!", function (err) {
    if (err) {
      res.end("Ha ocurrido un error.");
    } else {
      res.end("Se ha creado un archivo/n");
    }
  });
}

const server = http.createServer(requestListener); // creo el servidor HTTP
/* const server = http.createServer((req,res) => res.end("Hola mundo!"))  */ // con ECMA6+

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
}); // inicializo el servidor e indico en qué puerto.
// El numero de puerto por defecto para http es el 80, y para https el 443.
// Usar numeros de puerto > 1024 para crear nuevos servidores. Generalmente los numeros menores requieren permisos especiales, como Superadmin (depende del Sistema Operativo)
