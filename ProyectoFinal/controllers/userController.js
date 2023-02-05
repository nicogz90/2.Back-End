const { User } = require("../models");
const { hashPassword } = require("../utils/password");

module.exports = {
  index: async (req, res) => {
    const user = req.user;
    const users = await User.findAll();
    res.render("admin/users", { users, user });
  },
  store: async (req, res) => {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          password: await hashPassword(req.body.password),
          // TODO: falta gestionar Avatar
        },
      });

      if (created) {
        // req.login es provisto por passport
        req.login(user, function (err) {
          if (err) return next(err);
          res.redirect("/admin/usuarios");
        });
      } else {
        // chiche para mostrar mensajes en la pagina
        req.flash("error", "Lo sentimos, el usuario ya existe en el sistema."); // flash crea un objeto message al que le pasamos el mensaje de error (ver register.njk)
        res.redirect("back"); // en este caso "back" es el formulario antes de llenarse
      }
    } catch (error) {
      console.log(error);
      const messages = [];
      error.errors.forEach((error) => {
        messages.push(error.message);
      });
      req.flash("errors", messages);
      res.redirect("back");
    }
  },

  create: async (req, res) => {
    const user = req.user;
    res.render("admin/newUser", { user });
  },

  edit: async (req, res) => {
    const userToEdit = await User.findByPk(req.params.id);
    const user = req.user;

    res.render("admin/editUser", { userToEdit, user });
  },

  update: async (req, res) => {
    const user = await User.findByPk(req.params.id);

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email; // Validar que el email no este ocupado

    await user.save();

    res.redirect("/admin/usuarios");

    /* Otra forma:
    await User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    },
    {
      where: { id: req.params.id },
    }
    );
    res.redirect("/admin/usuarios"); */
  },

  destroy: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.redirect("/admin/usuarios");

    /* Otra forma:
    await User.destroy({
    where: { id: req.params.id },
    });
    res.redirect("/admin/usuarios") */
  },
};
