const { createConn } = require("../utils/db");

const getFruits = async (req, res) => {
  const db = await createConn();
  const [rows] = await db.query("SELECT * FROM frutas");
  res.status(200).render("fruits", { fruits: rows });
};

const addFruit = async (req, res) => {
  const fruta = req.body.newFruit;
  if (fruta) {
    const db = await createConn();
    const query = `INSERT INTO frutas (nombre) VALUES(?)`;
    await db.execute(query, [fruta]);
  }
  res.redirect("/frutas");
};

module.exports = {
  index: getFruits,
  store: addFruit,
};
