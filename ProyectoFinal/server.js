const path = require("path");
const express = require("express");
const app = express();
const routes = require("./routes");
const views = require("./config/views");
const sessions = require("./config/sessions");
const passport = require("./passport");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

views(app);
sessions(app);
passport(app);
routes(app);

// Notar que en este proyecto no se usó `sequelize.sync`.
// En su lugar se usaron migraciones.

module.exports = app;
