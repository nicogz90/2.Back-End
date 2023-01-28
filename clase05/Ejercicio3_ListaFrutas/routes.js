const express = require("express");
const router = express.Router();
const fruitsController = require("./controllers/fruitsController");

router.get("/", (req, res) => {
  res.send(`<a href="/frutas">Ir a la página de frutas</a>`);
});

router.get("/frutas", fruitsController.index); // con GET la información está en req.query
router.post("/frutas", fruitsController.store); // con POST la información está en req.body

module.exports = router;
