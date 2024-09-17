const express = require("express");
const metaService = require("./../services/meta/message.service")
const messageController = require("./../controllers/message.controller.js")
const openaiMessageController = require("./../controllers/openaimessage.controller.js")

const Route = express.Router();

Route.get("/", function (req, res){
    res.status(200).json({mensaje: "Iniciando con Node.js"})
});

Route.get("/prueba", function (req, res){
    res.status(200).json({mensaje: "Iniciando con Node.js (PRUEBA)"})
});

Route.post("/enviar-mensaje-template", async (req, res) => {
    await metaService.enviarMensajeTexto()

    return res.json({mensaje: "mensaje enviado"});
})

Route.post("/enviar-mensaje-texto", messageController.enviarMensajeTexto)
Route.get("/enviar-mensaje-imagen", messageController.enviarMensajeImagen)

Route.post("/openai/texto", openaiMessageController.funPregunta)

module.exports = Route;