const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");

publicRouter.get("/login", userController.showLogin);

publicRouter.post("/login", userController.login);

publicRouter.get("/register", userController.showRegister);

publicRouter.post("/register", userController.register);

module.exports = publicRouter;
