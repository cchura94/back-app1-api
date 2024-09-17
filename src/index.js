const express = require("express")
const Rutas = require("./routes/index")

require('dotenv').config()

const PORT = 3002;
const app = express();

// req.body
app.use(express.json())


app.use(Rutas);


// ----- OPEN AI

const OpenAI = require("openai");
const openai = new OpenAI();


async function pruebaIA(){
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Actua como vendedor y se directo con las respuestas en no más de 15 palabras" }, // 
            { role: 'user', content: 'Que productos ofrecen?' },
            { role: "assistant", content: "Vendemos solo teclados de la marca HP" },
            { role: 'user', content: 'y tiene la marca Asus?' },
            { role: "assistant", content: "No" },
            {
                role: "user",
                content: "me venden una laptop?",
            },        
        ],
    });
    console.log(completion.choices[0]);
}

// pruebaIA()


// ----- OPEN AI


app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})
