const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const pagesController = require("./controllers/pagesController");

router.get("/", pagesController.home);
router.get("/usuarios", userController.index);

router.get("/usuarios/crear", pagesController.create);
router.post("/usuarios", userController.store);

router.get("/usuarios/modificar/:id", userController.edit);
router.post("/usuarios/modificar", userController.update);

router.get("/usuarios/eliminar/:id", userController.destroy);

module.exports = router;
