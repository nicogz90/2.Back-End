const { User } = require("../models");
const { hashPassword } = require("../utils/password");
const { createClient } = require("@supabase/supabase-js");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

module.exports = {
  index: async (req, res) => {
    const user = req.user;
    const users = await User.findAll();
    res.render("admin/users", { users, user });
  },

  store: async (req, res, next) => {
    try {
      const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
      );

      const form = formidable({ multiples: false, keepExtensions: true });

      form.parse(req, async (err, fields, files) => {
        if (err) throw Error;

        let avatarPath;
        // Cuando no se sube ningun archivo Formidable crea uno vacio. 🤷‍♂️
        if (files.avatar.originalFilename !== "") {
          const ext = path.extname(files.avatar.filepath); // <== obtenemos la extension del archivo
          const newFileName = `image_${Date.now()}${ext}`; // <== creamos un nombre unico para el archivo
          const { data, error } = await supabase.storage
            .from("usuarios")
            .upload(
              newFileName, // <== donde y bajo que nombre queremos guardar el archivo
              fs.createReadStream(files.avatar.filepath), // <== leemos/cargamos el archivo en memoria
              {
                upsert: false, // <== si no existe lo crea
                contentType: files.avatar.type, // <== tipo de archivo
              }
            );
          avatarPath = newFileName;
        }

        const [user, created] = await User.findOrCreate({
          where: { email: fields.email },
          defaults: {
            firstname: fields.firstname,
            lastname: fields.lastname,
            password: await hashPassword(fields.password),
            avatar: avatarPath,
          },
        });

        if (created) {
          // req.login es provisto por passport
          req.login(user, function (err) {
            if (err) return next(err);
            res.redirect("/admin/usuarios");
          });
        } else {
          // chiche para mostrar mensajes en la pagina
          req.flash(
            "error",
            "Lo sentimos, el usuario ya existe en el sistema."
          ); // flash crea un objeto message al que le pasamos el mensaje de error (ver register.njk)
          res.redirect("back"); // en este caso "back" es el formulario antes de llenarse
        }
      });
    } catch (error) {
      console.log(error);
      const messages = [];
      error.errors.forEach((error) => {
        messages.push(error.message);
      });
      req.flash("errors", messages);
      res.redirect("back");
    }
  },

  create: async (req, res) => {
    const user = req.user;
    res.render("admin/newUser", { user });
  },

  edit: async (req, res) => {
    const userToEdit = await User.findByPk(req.params.id);
    const user = req.user;

    res.render("admin/editUser", { userToEdit, user });
  },

  update: async (req, res) => {
    const user = await User.findByPk(req.params.id);

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email; // TODO: Validar que el email no este ocupado

    await user.save();

    res.redirect("/admin/usuarios");

    /* Otra forma:
    await User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    },
    {
      where: { id: req.params.id },
    }
    );
    res.redirect("/admin/usuarios"); */
  },

  destroy: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.redirect("/admin/usuarios");

    /* Otra forma:
    await User.destroy({
    where: { id: req.params.id },
    });
    res.redirect("/admin/usuarios") */
  },
};
