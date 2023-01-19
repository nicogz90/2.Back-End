const formidable = require("formidable");

const { Fruit } = require("../models/index");
// const { Fruit } = require("../models"); // es equivalente

const getFruits = async (req, res) => {
  const fruits = await Fruit.findAll();
  res.status(200).render("home", { fruits: fruits });
};

const addFruit = async (req, res) => {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
      res.redirect("/frutas");
    } else {
      const fruitName = fields.newFruit;
      const imagePath = files.formFile.newFilename;

      await Fruit.create({
        name: fruitName,
        imagePath: imagePath,
      });

      res.redirect("/frutas");
    }
  });
};

const createFruit = async (req, res) => {
  res.render("create");
};

module.exports = {
  listaFrutas: getFruits,
  almacerFrutas: addFruit,
  crearFrutas: createFruit,
};
