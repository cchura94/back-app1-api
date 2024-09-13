const metaService = require("./../meta.service");

function enviarMensajeTexto(){
    
    return metaService().post('/messages', { 
                                        "messaging_product": "whatsapp",
                                        "to": "59173277937",
                                        "type": "template",
                                        "template": { 
                                        "name": "hello_world",
                                        "language": {
                                            "code": "en_US"
                                            }
                                        }
                                    })


}

function enviarMensajeNormal(mensaje){
    
    return metaService().post("/messages", {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "59173277937",
        "type": "text",
        "text": {
            "preview_url": true,
            "body": ""+mensaje
        }
      });
}

function enviarMensajeImagen(img_url){
    return metaService().post("/messages", {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "59173277937",
        "type": "image",
        "image": {
            "link": img_url, /* Only if linking to your media */
            "caption": "Hola este es un ejemplode imagen desde Node.js"
          }
      });
}

module.exports = {
    enviarMensajeTexto,
    enviarMensajeNormal,
    enviarMensajeImagen
}