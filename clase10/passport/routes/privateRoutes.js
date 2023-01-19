const express = require("express");
const privateRouter = express.Router();
const userController = require("../controllers/userController")

privateRouter.get("/", userController.showPrivate );

module.exports = privateRouter;

