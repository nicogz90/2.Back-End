/* const fs = require("fs"); */
const fruits = ["Manzana", "Pera", "Frutilla"];

module.exports = {
  index: (req, res) => {
    res.status(200).render("fruits", { fruits });
  },
  store: (req, res) => {
    const newFruit = req.body.newFruit;
    if (newFruit) {
      fruits.push(newFruit);
      /* fs.appendFileSync("frutas.txt", newFruit + "\n"); */ // no puedo usar el modulo 'fs'con Vercel, ya que el disco duro es sólo read-only. Vercel no brinda almacenamiento para BD >> precisamos un servicio auxiliar (ej Supabase) para
    }
    res.redirect("/frutas");
  },
};
