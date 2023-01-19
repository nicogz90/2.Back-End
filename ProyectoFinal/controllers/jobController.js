const { default: slugify } = require("slugify");
const { Job } = require("../models");

const index = async (req, res) => {
  const jobs = await Job.findAll();
  res.render("admin/jobs", { jobs, user: req.user });
};

const create = (req, res) => {
  res.render("admin/newJob", { user: req.user });
};

const store = async (req, res) => {
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
};

const edit = async (req, res) => {
  const job = await Job.findByPk(req.params.id);
  res.render("admin/editJob", { job, user: req.user });
};

const update = async (req, res) => {
  await Job.update(
    {
      title: req.body.title,
      description: req.body.description,
      company: req.body.company,
      city: req.body.city,
      applyEmail: req.body.applyEmail,
      featured: req.body.featured,
      slug: slugify(req.body.title),
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/admin/ofertas");
};

const destroy = async (req, res) => {
  await Job.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/admin/ofertas");
};

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
