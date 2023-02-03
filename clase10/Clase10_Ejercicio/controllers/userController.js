const { User } = require("../models");
const { hashPassword } = require("../utils/password");

module.exports = {
  store: async (req, res, next) => {
    const [user, created] = await User.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: await hashPassword(req.body.password),
      },
    });

    if (created) {
      // req.login es provisto por passport
      req.login(user, function (err) {
        if (err) return next(err);
        res.redirect("/private");
      });
    } else {
      // chiche para mostrar mensajes en la pagina
      req.flash("error", "Lo sentimos, el usuario ya existe en el sistema.");
      res.redirect("back");
    }
  },
};
