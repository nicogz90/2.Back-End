const router = require("express").Router();
const pagesController = require("./controllers/pagesController");

router.get("/", pagesController.showHome);
router.get("/productos", pagesController.showProducts);
router.get("/sobre-nosotros", pagesController.showAboutUs);
router.get("/contacto", pagesController.showContact);

module.exports = router;
