// creamos un objeto que va a contener todos los handlers
// cada propiedad del objeto es un handler
const routes = {
  showHome: (req, res) => {
    // root es una propiedad que podemos indicarle donde debe express
    // buscar el archivo que intentamos enviar, en esta caso el dir "views"
    res.sendFile("home.html", { root: "./views" });
  },
  showMultiply: (req, res) => {
    const { num1, num2 } = req.query;
    res.send("El resultado es: " + num1 * num2);
  },
};

// exportamos el objeto
module.exports = routes;
