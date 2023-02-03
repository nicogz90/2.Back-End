const express = require("express");
const router = express.Router();
const fruitsController = require("./controllers/fruitsController");

router.get("/", (req, res) => {
  res.send(`<a href="/frutas">Ir a la página de frutas</a>`);
});

const mid1 = (req, res, next) => {
  req.body.hola = "mundo";
  next();
};

const mid2 = (req, res, next) => {
  req.body.mundo = "hola";
  next();
};

router.get("/frutas", mid1, mid2, fruitsController.listaFrutas);
router.post("/frutas", fruitsController.almacenarFrutas);

router.get("/frutas/crear", fruitsController.crearFrutas);

module.exports = router;
