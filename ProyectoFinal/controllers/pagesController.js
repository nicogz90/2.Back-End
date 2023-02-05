const { Job } = require("../models/index");

module.exports = {
  showHome: async (req, res) => {
    const user = req.user;
    const jobs = await Job.findAll({
      where: { featured: true }, // ofertas destacadas
    });
    res.render("home", { user, jobs });
  },
  showJobs: async (req, res) => {
    const jobs = await Job.findAll();
    const user = req.user;
    res.render("jobs", { jobs, user });
  },
  showJob: async (req, res) => {
    const job = await Job.findOne({ where: { slug: req.params.slug } });
    const user = req.user;
    res.render("job", { job, user });
  },
  showLogin: (req, res) => {
    res.render("auth/login");
  },
  showRegister: (req, res) => {
    res.render("auth/register");
  },
};
