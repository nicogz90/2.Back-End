const db = require("./models");

module.exports = async () => {
  try {
    // Crear tablas:
    await db.sequelize.sync({ force: true });
    console.log("[Database] ¡Las tablas fueron creadas!");

    // Insertar datos de prueba:
    /* await require("./seeders")();
    console.log("[Database] ¡Los datos de prueba fueron insertados!"); */
  } catch (error) {
    console.log(error);
  }
};
