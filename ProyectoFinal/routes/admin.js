const express = require("express");
const jobController = require("../controllers/jobController");
const userController = require("../controllers/userController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const router = express.Router();

router.get("/ofertas", jobController.index);
router.get("/ofertas/crear", jobController.create);
router.post("/ofertas/crear", jobController.store);

router.get("/ofertas/editar/:id", jobController.edit);
router.post("/ofertas/editar/:id", jobController.update);

router.get("/ofertas/eliminar/:id", jobController.destroy);
//
router.get("/usuarios", userController.index);
router.get("/usuarios/crear", userController.create);
router.post("/usuarios/crear", userController.store);

router.get("/usuarios/editar/:id", userController.edit);
router.post("/usuarios/editar/:id", userController.update);

router.get("/usuarios/eliminar/:id", userController.destroy);

module.exports = router;
