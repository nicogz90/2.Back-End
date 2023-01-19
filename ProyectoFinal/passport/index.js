const passport = require("passport");
const { User } = require("../models");

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  require("./localStrategy")(passport);

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        done(error);
      });
  });
};
