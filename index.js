require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { gerarResposta } = require("./services/geminiService");

const app = express();
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos (HTML/CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

app.post("/suporte", async (req, res) => {
  const { pergunta } = req.body;

  if (!pergunta) {
    return res.status(400).json({ erro: "A pergunta é obrigatória." });
  }

  try {
    const resposta = await gerarResposta(pergunta);
    res.json({ resposta });
  } catch (error) {
    console.error("Erro na rota /suporte:", error.message);
    res.status(500).json({ erro: "Erro ao processar sua solicitação." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
