require("dotenv").config();

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const nunjucks = require("nunjucks");
const express = require("express");
const routes = require("./routes/index");
const dbInitialSetup = require("./dbInitialSetup");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: false, // Docs: "The default value is true, but using the default has been deprecated".
    saveUninitialized: false, // Docs: "The default value is true, but using the default has been deprecated".
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");
app.use(routes);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
