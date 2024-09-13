const express = require("express")
const Rutas = require("./routes/index")

require('dotenv').config()

const PORT = 3002;
const app = express();


app.use(Rutas);


// ----- OPEN AI

const OpenAI = require("openai");
const openai = new OpenAI();

async function pruebaIA(){
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "" },
            {
                role: "user",
                content: "?.",
            },        
        ],
    });
    console.log(completion.choices[0].message);
}

pruebaIA()


// ----- OPEN AI


app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})
