const openAiService = require("./../openai.service.js")

const enviarTexto = (pregunta) => {
    return openAiService().post("", {
        "model": "gpt-4o-mini",
        "messages": [
            { role: "system", content: "Actua como vendedor y se directo con las respuestas en no más de 15 palabras" }, // 
            { role: 'user', content: 'Que productos ofrecen?' },
            { role: "assistant", content: "Vendemos solo teclados de la marca HP" },
            { role: 'user', content: 'y tiene la marca Asus?' },
            { role: "assistant", content: "No" },
            {
                role: "user",
                content: pregunta,
            },
        ]
      })
}

module.exports = {
    enviarTexto
}