const fruits = ["Manzana", "Pera", "Frutilla"];

module.exports = {
  index: (req, res) => {
    res.status(200).render("fruits", { fruits });
  },
  store: (req, res) => {
    const newFruit = req.body.newFruit;
    if (newFruit) {
      fruits.push(newFruit);
    }
    res.redirect("/frutas");
  },
};
