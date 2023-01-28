const { Fruit } = require("../models");

const getFruits = async (req, res) => {
  const fruits = await Fruit.findAll();
  console.log(fruits);
  res.status(200).render("home", { fruits });
};

const addFruit = async (req, res) => {
  const fruitName = req.body.newFruit;
  if (fruitName) {
    const fruit = await Fruit.create({ name: fruitName });
    console.log(fruit, "<<");
  }
  res.redirect("/frutas");
};

module.exports = {
  index: getFruits,
  store: addFruit,
};
