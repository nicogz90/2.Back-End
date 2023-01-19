module.exports = {
  showRegister: (req, res) => {
    res.render("register");
  },
  showLogin: (req, res) => {
    res.render("login");
  },
  showPrivate: (req, res) => {
    res.render("private", {
      user: {
        firstname: req.user.firstname,
        lastname: req.user.lastname,
      },
    });
  },
};
