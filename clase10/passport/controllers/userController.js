const { User } = require("../models");
const { hashSync } = require("bcryptjs");

// muestra el login
async function showLogin(req, res) {
  res.render("login");
}

// realizo login
async function login(req, res) {}

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
  res.render("private");
}

module.exports = { showLogin, login, showRegister, register, showPrivate };
