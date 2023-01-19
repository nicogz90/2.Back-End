const path = require("path");

module.exports = {
  showHome: (req, res) => {
    res.sendFile("home.html", { root: "./views" });
  },
  showProducts: (req, res) => {
    res.sendFile("products.html", { root: "./views" });
  },
  showAboutUs: (req, res) => {
    res.sendFile("aboutUs.html", { root: "./views" });
  },
  showContact: (req, res) => {
    res.sendFile("contact.html", { root: "./views" });
  },
};
