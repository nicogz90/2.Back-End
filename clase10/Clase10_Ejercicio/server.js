require("dotenv").config();

const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const session = require("express-session");

const flash = require("express-flash");
const bcrypt = require("bcryptjs");

const express = require("express");
const dbInitialSetup = require("./dbInitialSetup");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const { User } = require("./models");
const { verifyCredentials } = require("./utils/password");

const APP_PORT = process.env.APP_PORT || 3000;

const app = express();

//configuramos la session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    name: "clase10_session", // Por defecto la cookie se llama "connect.id"
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // Por defecto es null (la cookie no expira). Valor en milisegundos.
      secure: false, // La opción `true` requiere HTTPS.
      httpOnly: true,
    },
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
      passReqToCallback: true,
    },
    async function (req, email, password, done) {
      const user = await User.findOne({
        where: { email },
      });

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
    return done(null, user);
  } else {
    return done("Usuario no encontrado", null);
  }
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.use(flash());

// se debe inicializar primero passport antes de registrar las rutas
app.use(routes);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
