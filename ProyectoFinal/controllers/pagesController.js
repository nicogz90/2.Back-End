const { Job } = require("../models");

const showHome = async (req, res) => {
  const user = req.user;
  const jobs = await Job.findAll({
    where: { featured: true }, // ofertas destacadas
  });
  res.render("home", { jobs, user });
};

const showJobs = async (req, res) => {
  const jobs = await Job.findAll();
  res.render("jobs", { jobs });
};

const showJob = async (req, res) => {
  const job_slug = req.params.slug;
  const job = await Job.findOne({ where: { slug: job_slug } });
  res.render("job", { job });
};

const showLogin = (req, res) => {
  res.render("auth/login");
};

const showRegister = (req, res) => {
  res.render("auth/register");
};

module.exports = {
  showHome,
  showJobs,
  showJob,
  showLogin,
  showRegister,
};
