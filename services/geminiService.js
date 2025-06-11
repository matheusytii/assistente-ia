// services/geminiService.js
const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

async function gerarResposta(pergunta) {
  const body = {
  contents: [
    {
      parts: [
        {
          text: `
Você é um atendente de suporte técnico experiente. Seja direto, educado e claro.

➡️ Pergunta do usuário: "${pergunta}"

Responda de forma técnica e peça informações úteis apenas se necessário. Use numeração simples, sem negrito ou formatação Markdown.

Evite frases genéricas, vá direto ao ponto e use uma linguagem acessível.
`,

        },
      ],
    },
  ],
};


  try {
    const response = await axios.post(GEMINI_URL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || "Não foi possível gerar uma resposta.";
  } catch (error) {
    console.error("Erro ao chamar a API Gemini:", error.message);
    throw new Error("Erro ao gerar resposta com Gemini.");
  }
}

module.exports = { gerarResposta };
