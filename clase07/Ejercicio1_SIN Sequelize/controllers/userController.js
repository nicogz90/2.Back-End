const { crearConexion } = require("../utils/database");

module.exports = {
  index: async (req, res) => {
    const db = await crearConexion();
    const query = "SELECT * FROM users";
    const [usuarios] = await db.query(query);
    res.render("usuarios", { usuarios });
  },
  store: async (req, res) => {
    const db = await crearConexion();
    const query = "INSERT INTO users (firstname, lastname, age) VALUES (?,?,?)";
    const values = [req.body.firstname, req.body.lastname, req.body.age];
    await db.query(query, values);
    res.redirect("/usuarios");
  },
  edit: async (req, res) => {
    const db = await crearConexion();
    const query = "SELECT * FROM users WHERE id=?";
    const [[user]] = await db.query(query, req.params.id);
    res.render("update", { user });
  },
  update: async (req, res) => {
    const db = await crearConexion();
    const query = "UPDATE users SET firstname=?, lastname=?, age=? WHERE id=?";
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.age,
      req.body.id,
    ];
    await db.query(query, values);
    res.redirect("/usuarios");
  },
  destroy: async (req, res) => {
    const db = await crearConexion();
    const query = "DELETE FROM users WHERE id=?";
    const id = req.params.id;
    await db.query(query, id);
    res.redirect("/usuarios");
  },
};
