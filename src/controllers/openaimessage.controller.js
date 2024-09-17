const textMessageService = require("./../services/openai/text.service")

async function funPregunta(req, res){
    //  /openai/texto?pregunta=Que+vendes?

    // req.params.id
    // req.query.pregunta
    const datos = req.body
    
    const {data} = await textMessageService.enviarTexto(datos.pregunta)

    return res.send({mensaje: "Recibido", respuesta: data.choices[0].message.content})
}

module.exports = {
    funPregunta
}