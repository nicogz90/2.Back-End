const { extractFile } = require("../utils");
const { createClient } = require("@supabase/supabase-js");
const { formidable } = require("../utils");
const path = require("path");
const fs = require("fs");
const { Fruit } = require("../models/index");

const getFruits = async (req, res) => {
  const fruits = await Fruit.findAll();
  res.status(200).render("home", { fruits: fruits });
};

const addFruit = async (req, res) => {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  // Utilizamos la funcion extractFile de las lib que retorna
  // una promesa con los datos necesarios
  const { fields, files } = await extractFile(req, {
    multiples: false,
    keepExtensions: true,
  });

  const fruitName = fields.newFruit;
  let imagePath;

  // Cuando no se sube ningun archivo Formidable crea uno vacio. 🤷‍♂️
  if (files.fotito.originalFilename !== "") {
    const ext = path.extname(files.fotito.filepath); // <== obtenemos la extension del archivo
    const newFileName = `image_${Date.now()}${ext}`; // <== creamos un nombre unico para el archivo
    // image_123123123.png

    const { data, error } = await supabase.storage.from("frutas").upload(
      newFileName, // <== donde y bajo que nombre queremos guardar el archivo
      fs.createReadStream(files.fotito.filepath), // <== leemos/cargamos el archivo en memoria
      {
        upsert: false, // <== si no existe lo crea
        contentType: files.fotito.type, // <== tipo de archivo
      }
    );
    imagePath = newFileName;
  }

  await Fruit.create({
    name: fruitName,
    imagePath: imagePath,
  });

  res.redirect("/frutas");
};

const createFruit = async (req, res) => {
  res.render("create");
};

module.exports = {
  listaFrutas: getFruits,
  almacenarFrutas: addFruit,
  crearFrutas: createFruit,
};
