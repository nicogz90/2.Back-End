const pagesController = require("./controllers/pagesController");

module.exports = (app) => {
  app.get("/", pagesController.showHome);
  app.get("/productos", pagesController.showProducts);
  app.get("/sobre-nosotros", pagesController.showAboutUs);
  app.get("/contacto", pagesController.showContact);
};
