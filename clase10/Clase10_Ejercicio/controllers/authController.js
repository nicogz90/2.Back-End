const { User } = require("../models");
const passport = require("passport");

module.exports = {
  login: passport.authenticate("local", {
    successRedirect: "/private",
    failureRedirect: "/",
    failureFlash: true,
  }),

  logout: (req, res, next) => {
    // Funcion agregada por passport para poder hacer logout
    // destruye la sesion
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  },
};
