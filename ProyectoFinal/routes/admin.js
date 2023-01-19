// BACK OFFICE (visible para el administrador)

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jobController = require("../controllers/jobController");

// Rutas del panel de administracion para usuarios (en el archivo routes/index ya agrega por defecto el "/admin")
router.get("/usuarios", userController.index);
router.get("/usuarios/crear", userController.create);
router.post("/usuarios/crear", userController.store);
router.get("/usuarios/editar/:id", userController.edit);
router.post("/usuarios/editar/:id", userController.update);
router.get("/usuarios/eliminar/:id", userController.destroy);

// Rutas del panel de administracion para ofertas laborales (trabajos)
router.get("/ofertas", jobController.index);
router.get("/ofertas/crear", jobController.create);
router.post("/ofertas/crear", jobController.store);
router.get("/ofertas/editar/:id", jobController.edit);
router.post("/ofertas/editar/:id", jobController.update);
router.get("/ofertas/eliminar/:id", jobController.destroy);

module.exports = router;
