const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  db.sequelize
    .sync({ force: true })
    .then(async () => {
      /* await require("./seeders")(); */
      console.log("[Database] ¡Las tablas fueron creadas!");
    })
    .catch((error) => console.log(error));
};
