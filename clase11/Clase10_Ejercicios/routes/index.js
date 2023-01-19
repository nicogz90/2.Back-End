const express = require("express");
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const { isAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/private", isAuth, pagesController.showPrivate);

router.get("/", pagesController.showLogin);
router.post("/login", authController.login);

router.get("/register", pagesController.showRegister);
router.post("/register", userController.store);

router.get("/logout", authController.logout);

module.exports = router;
