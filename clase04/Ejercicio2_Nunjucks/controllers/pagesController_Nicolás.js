const homeController = require("./homeController");

module.exports = {
  showHome: (req, res) => {
    res.render("home", { isWeekend: homeController });
  },
  showProducts: (req, res) => {
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
    });
  },
  showAboutUs: (req, res) => {
    res.render("about");
  },
  showContact: (req, res) => {
    res.render("contact");
  },
};
