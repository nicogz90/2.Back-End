require("dotenv").config();

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const nunjucks = require("nunjucks");
const express = require("express");
const routes = require("./routes/index");
const dbInitialSetup = require("./dbInitialSetup");
const { User } = require("./models");
const bcrypt = require("bcryptjs");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // Docs: "The default value is true, but using the default has been deprecated".
    saveUninitialized: false, // Docs: "The default value is true, but using the default has been deprecated".
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: true,
    },
    async function (email, password, done) {
      const user = await User.findOne({ where: { email } });

      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Credenciales incorrectas" });
        }
      } else {
        return done(null, false, { message: "Credenciales incorrectas" });
      }
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findByPk(id);
  if (user) {
    return done(null, user); // usuario queda disponible en req.user
  } else {
    return done("Usuario no encontrado", null);
  }
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

dbInitialSetup(); // Crea tablas (e inserta datos de prueba).

app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}/register.\n`);
});
