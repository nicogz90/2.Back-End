// Exportamos una function que acepta dos parametros:
// req: objeto request
// res: objeto response

module.exports = (req, res) => {
  console.log("req.url", req.url);
  switch (req.url) {
    case "/":
      res.write("HOME");
      break;
    case "/productos":
      res.write("PRODUCTOS");
      break;
    case "/contacto":
      res.write("CONTACTO");
      break;
    default:
      res.write("Error 404");
      break;
  }
  res.end();
};

// otra forma de hacerlo:
/* 
const routes = (req, res) => {
  ...
} 
module.exports = routes;
*/
