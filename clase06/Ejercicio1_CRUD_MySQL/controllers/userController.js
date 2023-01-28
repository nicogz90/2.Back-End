const { customQuery } = require("../db");

module.exports = {
  index: async (req, res) => {
    const users = await customQuery("SELECT * FROM users", []);
    res.render("users", { users });
  },

  store: async (req, res) => {
    await customQuery(
      "INSERT INTO users (firstname, lastname, age) VALUES(?,?,?)",
      [req.body.firstname, req.body.lastname, req.body.age]
    );
    res.redirect("/usuarios");
  },

  update: async (req, res) => {
    await customQuery(
      "UPDATE users SET firstname=?, lastname=?, age=? WHERE id = ?",
      [req.body.firstname, req.body.lastname, req.body.age, req.body.id]
    );
    res.redirect("/usuarios");
  },

  destroy: async (req, res) => {
    await customQuery("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.redirect("/usuarios");
  },
};
