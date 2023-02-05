const { Job } = require("../models");

const slugify = require("slugify");

module.exports = {
  index: async (req, res) => {
    const user = req.user;
    const jobs = await Job.findAll();
    res.render("admin/jobs", { jobs, user });
  },

  store: async (req, res) => {
    await Job.create({
      title: req.body.title,
      description: req.body.description,
      company: req.body.company,
      city: req.body.city,
      applyEmail: req.body.applyEmail,
      featured: req.body.featured,
      slug: slugify(req.body.title),
    });

    res.redirect("/admin/ofertas");
  },

  create: async (req, res) => {
    const user = req.user;
    res.render("admin/newJob", { user });
  },

  edit: async (req, res) => {
    const job = await Job.findByPk(req.params.id);

    const user = req.user;
    res.render("admin/editJob", { job, user });
  },

  update: async (req, res) => {
    const job = await Job.findByPk(req.params.id);
    job.title = req.body.title;
    job.description = req.body.description;
    job.company = req.body.company;
    job.city = req.body.city;
    job.applyEmail = req.body.applyEmail;
    job.featured = req.body.featured;
    job.slug = slugify(req.body.title);

    await job.save();

    res.redirect("/admin/ofertas");
  },

  destroy: async (req, res) => {
    const job = await Job.findByPk(req.params.id);
    await job.destroy();
    res.redirect("/admin/ofertas");
  },
};
