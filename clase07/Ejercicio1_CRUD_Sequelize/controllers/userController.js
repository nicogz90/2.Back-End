const { User } = require("../models");

module.exports = {
  index: async (req, res) => {
    users = await User.findAll();
    res.render("users", { users });
  },

  create: (req, res) => {
    res.render("usersCreate");
  },

  store: async (req, res) => {
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
    });
    res.redirect("/usuarios");
  },

  edit: async (req, res) => {
    const user = await User.findByPk(req.params.id);

    res.render("usersEdit", { user });
  },

  update: async (req, res) => {
    await User.update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.redirect("/usuarios");
  },

  destroy: async (req, res) => {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/usuarios");
  },
};
