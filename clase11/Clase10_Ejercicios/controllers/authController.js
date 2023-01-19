const { User } = require("../models");
const passport = require("passport");

module.exports = {
  login: passport.authenticate("local", {
    successRedirect: "/private",
    failureRedirect: "/",
    failureFlash: true,
  }),

  logout: (req, res) => {
    // Funcion agregada por passport para poder hacer logout
    // destruye la sesion
    req.logout();
    res.redirect("/");
  },
};
