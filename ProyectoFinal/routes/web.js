// FRONT OFFICE (visible para el usuario)

const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const redirectIfAuthenticated = require("../middlewares/redirectIfAuthenticated");

// Rutas de paginas
router.get("/", pagesController.showHome);
router.get("/trabajos", pagesController.showJobs);
router.get("/trabajos/:slug", pagesController.showJob);
router.get("/login", redirectIfAuthenticated, pagesController.showLogin); // con el middleware paso directo a pagina de administrador si ya estoy autenticado
router.get("/register", redirectIfAuthenticated, pagesController.showRegister);

// Rutas de autenticacion
router.post("/register", userController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;
