/**
 * Los seeds se corren con el comando: `npx sequelize-cli db:seed:all`.
 *
 * ⚠️ Es necesario crear el modelo `Job` antes de poder ejectuar este seed.
 */

"use strict";

const { Job } = require("../models");
const slugify = require("slugify");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const job1 = await Job.create({
      title: "Programador JavaScript Junior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Montevideo".toUpperCase(),
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
      slug: slugify("Programador JavaScript Junior"),
    });

    const job2 = await Job.create({
      title: "Diseñador UI/UX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Buenos Aires".toUpperCase(),
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
      slug: slugify("Diseñador UI/UX"),
    });

    const job3 = await Job.create({
      title: "Experto en React.js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Bogotá".toUpperCase(),
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
      slug: slugify("Experto en React.js"),
    });

    const job4 = await Job.create({
      title: "Project Manager Senior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Santiago".toUpperCase(),
      applyEmail: "hola@ha.dev",
      featured: false,
      image: "avatar_1.png",
      slug: slugify("Project Manager Senior"),
    });

    const job5 = await Job.create({
      title: "Data Scientist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Quito".toUpperCase(),
      applyEmail: "hola@ha.dev",
      featured: false,
      image: "avatar_1.png",
      slug: slugify("Data Scientist"),
    });

    const job6 = await Job.create({
      title: "Maquetador Senior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Lima".toUpperCase(),
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
      slug: slugify("Maquetador Senior"),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("jobs", null, {});
  },
};
