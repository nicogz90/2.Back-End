// npm init : inicializa un proyecto y crea archivo 'package.json' con los datos del proyecto
// npm install express : instala el modulo 'express' y crea el archivo 'package-lock.json' y carpeta 'node_modules'. ademas actualiza el archivo 'package.json' con la dependencia "express".

const express = require("express");

const app = express(); // Crea una instancia de express. * Crea un servidor

app.get("/", (req, res) => res.send("¡Hola Hack Academy!"));
app.get("/contactos", (req, res) => res.send("Página de contactos"));
app.get("/productos", (req, res) => res.sendFile(__dirname + "/productos.html")); // '__dirname' me da la ruta actual del archivo

app.listen(3000, () => console.log("¡Servidor corriendo en el puerto 3000!"));
