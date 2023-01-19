const passport = require("passport");
const { User } = require("../models/User");

module.exports = {
  login: passport.authenticate("local", {
    successRedirect: "/admin/ofertas",
    failureRedirect: "/login",
    failureFlash: true,
  }),

  logout: (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  },
};
