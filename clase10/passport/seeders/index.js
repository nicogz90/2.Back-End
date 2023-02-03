module.exports = async function runSeeders() {
  await require("./userSeeder")();
};
