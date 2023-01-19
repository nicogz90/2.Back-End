const { crearConexion } = require("../utils/database");

module.exports = {
  index: async (req, res) => {
    const db = await crearConexion();
    const query = "SELECT * FROM users";
    const [rows] = await db.query(query);
    res.render("usuarios", { usuarios: rows });
  },
  store: async (req, res) => {
    const db = await crearConexion();
    const query = "INSERT INTO users (firstname, lastname, age) VALUES (?,?,?)";
    const values = [req.body.firstname, req.body.lastname, req.body.age];
    const [rows] = await db.query(query, values);
    res.redirect("/usuarios");
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
    const [rows] = await db.query(query, values);
    res.redirect("/usuarios");
  },
  destroy: async (req, res) => {
    const db = await crearConexion();
    const query = "DELETE FROM users WHERE id=?";
    const values = req.params.id;
    const [rows] = await db.query(query, values);
    res.redirect("/usuarios");
  },
};
