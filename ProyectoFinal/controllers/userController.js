const { nextDay } = require("date-fns");
const flash = require("express-flash");
const { User } = require("../models");
const { hashPassword } = require("../utils/password");

const register = async (req, res, next) => {
  const password = await hashPassword(req.body.password);
  const [user, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password,
    },
  });
  if (created) {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect("/admin/usuarios");
    });
  } else {
    req.flash("error", "El usuario ya existe"); // flash crea un objeto message al que le pasamos el mensaje de error (ver register.njk)
    res.redirect("back"); // en este caso "back" es el formulario antes de llenarse
  }
};

const index = async (req, res) => {
  const users = await User.findAll();
  res.render("admin/users", { users, user: req.user });
};

const create = (req, res) => {
  res.render("admin/newUser", { user: req.user });
};

const store = async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  // falta GESTIONAR AVATAR / qué pasa con la contrasena???
  await User.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
  });
  res.redirect("/admin/usuarios");
};

const edit = async (req, res) => {
  const userToEdit = await User.findByPk(req.params.id);
  res.render("admin/editUser", { userToEdit, user: req.user });
};

const update = async (req, res) => {
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
  res.redirect("/admin/usuarios");
};

const destroy = async (req, res) => {
  await User.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/admin/usuarios");
};

module.exports = {
  register,
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
