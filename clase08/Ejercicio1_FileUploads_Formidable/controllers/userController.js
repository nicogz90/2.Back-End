const { User } = require("../models");
const formidable = require("formidable");

const usersList = async (req, res) => {
  const users = await User.findAll();
  res.status(200).render("users", { users });
};

const newUserForm = (req, res) => {
  res.status(200).render("create");
};

const addUser = async (req, res) => {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) throw Error;
    await User.create({
      name: fields.name,
      surname: fields.surname,
      imagePath: files.profileImg.newFilename,
    });
    res.status(200).redirect("users");
  });
};

module.exports = { usersList, newUserForm, addUser };
