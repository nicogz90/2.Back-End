const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/home.html")
})

app.get("/multiplicar", (req,res) => {
    const {num1, num2} = req.query
    res.send(`El resultado es: ${num1*num2}`)
})

app.listen(3000, ()=>console.log("Servidor corriendo en el puerto 3000"))