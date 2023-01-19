const products = require("../data/products");
const isWeekend = require("../utils/isWeekend");

module.exports = {
  showHome: (req, res) => {
    const dayMessage = isWeekend()
      ? "Hoy es fin de semana."
      : "Hoy es un día de semana.";
    res.render("home", {
      dayMessage,
    });
  },
  showProducts: (req, res) => {
    res.render("products", { products });
  },
  showAboutUs: (req, res) => {
    res.render("about");
  },
  showContact: (req, res) => {
    res.render("contact");
  },
};
