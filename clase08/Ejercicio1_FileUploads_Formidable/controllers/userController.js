const usersList = (req, res) => {
  req.render("users", { users: users });
};

const newUserForm = (req, res) => {};

const addUser = (req, res) => {};

module.exports = { usersList, newUserForm, addUser };
