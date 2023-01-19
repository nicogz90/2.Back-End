const nunjucks = require("nunjucks");
const path = require("path");
const { format: dateFormat } = require("date-fns");

module.exports = (app) => {
  app.set("views", path.join(__dirname, "/../views"));

  const nunjucksEnv = nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  nunjucksEnv.addGlobal("currentYear", new Date().getFullYear());
  nunjucksEnv.addGlobal("dateFormat", dateFormat);

  app.set("view engine", "njk");
};
