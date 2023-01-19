const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/usuarios", userController.index);
router.post("/usuarios", userController.store);
router.get("/usuarios/eliminar/:id", userController.destroy);
router.post("/usuarios/modificar", userController.update);

module.exports = router;
