const { User } = require("../models");
const { hashSync } = require("bcryptjs");
const passport = require("passport");

// muestra el login
async function showLogin(req, res) {
  res.render("login");
}

// realizo login
const login = passport.authenticate("local", {
  successRedirect: "/private",
  failureRedirect: "/login",
});

// mostrar el form de registro
async function showRegister(req, res) {
  res.render("register");
}

// crear/registra el usuario
async function register(req, res) {
  const passwordHash = hashSync(req.body.password);
  await User.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: passwordHash,
  });
  res.redirect("/login");
}

// muestra la pagina privada
async function showPrivate(req, res) {
  if (req.user) {
    res.render("private");
  } else {
    res.redirect("/login");
  }
}

// destruye la sesion
function logout(req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
}

module.exports = { showLogin, login, showRegister, register, showPrivate, logout };
