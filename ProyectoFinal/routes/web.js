const express = require("express");
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const redirectIfAuthenticated = require("../middlewares/redirectIfAuthenticated");

const router = express.Router();

router.get("/", pagesController.showHome);

router.get("/trabajos", pagesController.showJobs);
router.get("/trabajos/:slug", pagesController.showJob);

router.get("/login", redirectIfAuthenticated, pagesController.showLogin);
router.post("/login", authController.login);

router.get("/register", redirectIfAuthenticated, pagesController.showRegister);
router.post("/register", userController.store);

router.get("/logout", authController.logout);

module.exports = router;
