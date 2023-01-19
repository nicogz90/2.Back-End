const express = require ("express")
const router = express.Router()

const pagesControllers = require("./pagesController")

router.get("/", pagesControllers.home)
router.get("/productos", pagesControllers.products)
router.get("/contacto", pagesControllers.contact)
router.get("/sobre-nosotros", pagesControllers.aboutUs)

module.exports = router