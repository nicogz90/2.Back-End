const express = require("express");
const router = express.Router();
const fruitsController = require("./controllers/fruitsController");

router.get("/", (req, res) => {
  res.send(`<a href="/frutas">Ir a la página de frutas</a>`);
});

router.get("/frutas", fruitsController.listaFrutas);
router.post("/frutas", fruitsController.almacerFrutas);

router.get("/frutas/crear", fruitsController.crearFrutas);

module.exports = router;
