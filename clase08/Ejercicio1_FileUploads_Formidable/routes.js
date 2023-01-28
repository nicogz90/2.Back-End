const router = require("express").Router();
const userController = require("./controllers/userController");

router.get("/", (req, res) => {
  res.send(`<a href="/users">Ir a lista de usuarios</a>`);
});

router.get("/users", userController.usersList);

router.get("/create", userController.newUserForm);
router.post("/create", userController.addUser);

module.exports = router;
