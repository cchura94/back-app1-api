const messageService = require("./../services/meta/message.service")

async function enviarMensajeTexto(req, res){
    const {data} = await messageService.enviarMensajeNormal("Hola desde el controlador");

    console.log(data);

    return res.json({mensaje: "EL mensaje ha sido enviado"});
}

async function enviarMensajeImagen(req, res) {
    const {data} = await messageService.enviarMensajeImagen("https://live.staticflickr.com/5610/15762092202_6a41f8fe0f_b.jpg");

    console.log(data);

    return res.json({mensaje: "EL mensaje ha sido enviado"});
}


module.exports = {
    enviarMensajeTexto,
    enviarMensajeImagen
}