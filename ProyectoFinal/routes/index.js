const webRoutes = require("./web");
const adminRoutes = require("./admin");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

module.exports = (app) => {
  app.use(webRoutes);
  app.use("/admin", ensureAuthenticated, adminRoutes);
};
