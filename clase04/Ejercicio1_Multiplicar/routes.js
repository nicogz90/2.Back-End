const express = require("express");

// importamos los handlers que estan en otro archivo
// como podria importar los handlers directamente? 🤔
const pagesController = require("./controllers/pagesController");

// creamos un nuevo router de express (independiente del servidor app que creamos en index)
const router = express.Router();

// Registramos las rutas y usamos los handlers del archivo pageController
router.get("/", pagesController.showHome);
router.get("/multiplicar", pagesController.showMultiply);

// exportamos el router creado
module.exports = router;
