const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8000;

const { format } = require("date-fns"); // importamos solo la funcion format de todo el modulo date-fns
const { es } = require("date-fns/locale"); // configuracion de date-fns en español

app.get("/", (req, res) => {
  const fecha = format(
    new Date(),
    "dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss (EEEE).", // las comillas simples nos ayudan a indicarle a date-fns que no queremos que interprete esas letras como tokens
    {
      locale: es,
    }
  );
  const newLine = `Se llamó al servidor el ${fecha}\n`;
  fs.appendFile("access_log.txt", newLine, (err) => {
    if (err) return res.send("Ha ocurrido un error.");
    console.log(newLine);
    res.send("Se creó/editó el archivo.\n");
  });
});

app.listen(`${PORT}`, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
