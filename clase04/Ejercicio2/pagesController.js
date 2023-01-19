/* const isWeekend = require("./utils/isWeekend"); */

module.exports = {
  home: (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();
    var dayMessage = "Hoy es un día de semana";
    if (currentDay === 6 || currentDay === 0) {
      var dayMessage = "Hoy es fin de semana";
    }
    res.render("home", { dayMessage });
  },

  products: (req, res) =>
    res.render("products", {
      products: [
        "Notebook",
        "Tablet",
        "Smartphone",
        "Cámara",
        "Periféricos",
        "Monitor",
        "Cable HDMI",
        "Cable USB",
        "Cargador",
      ],
    }),

  contact: (req, res) => res.render("contact"),

  aboutUs: (req, res) => res.render("about"),
};
