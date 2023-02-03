const { config } = require("dotenv");
config();

const { sequelize } = require("./models/index");

const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const routes = require("./routes");

async function main() {
  await sequelize.sync({ force: true });

  // usamos el valor del .env o usamos el valor 3000 por defecto
  const PORT = process.env.SERVER_PORT || 3000;

  const app = express();

  app.use(express.urlencoded({ extended: true }));

  // Hacemos disponible la carpeta public
  app.use(express.static("public"));

  nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  app.set("view engine", "njk");

  app.use(routes);

  app.listen(PORT, () =>
    console.log(`¡Servidor corriendo en el puerto ${PORT}!`)
  );
}

main().catch((error) => {
  console.log(error);
});

/* passport.use(
  new LocalStrategy(async function (email, passwordPlana, done) {
    const user = await User.findOne({ email: email });
    if (user) {
      const password = user.password; // ljdlkasjflkdjsflksdjflkjsdlf
      const isValid = validaContraseña(passwordPlana, password);
      if (isValid) {
        done(null, user);
      } else {
        done(null, false, { message: "Usuario y/o Contraseña incorrectos" });
      }
    } else {
      done(null, false, { message: "Usuario y/o Contraseña incorrectos" });
    }
  })
); */
