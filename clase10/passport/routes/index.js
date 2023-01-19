const { Router } = require("express");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

const globalRouter = Router();
globalRouter.use("/", publicRoutes);
globalRouter.use("/private", privateRoutes);

module.exports = globalRouter;

