const session = require("express-session");
const flash = require("express-flash");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("../models");

module.exports = (app) => {
  app.use(
    session({
      // Por defecto las sessiones estan en la memoria del servidor
      // Mediante esta propiedad podemos decirle que se gurden en una base de datos o cualquier otro mecanismo
      store: new SequelizeStore({
        db: sequelize,
        tableName: "sessions",
      }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      name: "session", // Por defecto la cookie se llama "connect.id"
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // Por defecto es null (la cookie no expira). Valor en milisegundos.
        secure: false, // La opción `true` requiere HTTPS.
        httpOnly: true,
      },
    })
  );
  app.use(flash());
};
