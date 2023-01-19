const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");
const { verifyCredentials } = require("../utils/password");

module.exports = (passport) => {
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: true, // Para usar sesiones en un browser.
        passReqToCallback: true, // Para usar flash messages.
      },
      /**
       * IMPORTANTE:
       * Al utilizar `passReqToCallback: true` el código superior, la siguiente función lleva 4 parámetros en lugar de 3.
       * Normalmente sólo llevaría `username`, `passwrod` y `done`.
       **/
      async function (req, username, password, done) {
        // Este código sólo se llama si username y password están definidos.
        try {
          const user = await verifyCredentials(username, password);
          if (user) {
            done(null, user);
          } else {
            done(null, false, { message: "Credenciales incorrectas" });
          }
        } catch (error) {
          done(error, false, { message: "Algo salio mal" });
        }
      }
    )
  );
};
