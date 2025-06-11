# 🤖 Assistente de Suporte Técnico com Node.js + Gemini

Este projeto é um backend em Node.js com integração à API do Gemini para responder dúvidas técnicas de usuários.

## Como usar

1. Crie um arquivo `.env` com sua chave da Gemini:
```
GEMINI_API_KEY=sua-chave-aqui
```

2. Instale as dependências:
```
npm install
```

3. Inicie o servidor:
```
npm start
```

4. Faça requisições POST para `/suporte` com:
```json
{ "pergunta": "Meu notebook não liga" }
```

## Exemplo de resposta

```json
{
  "resposta": "Certifique-se de que o notebook está conectado à energia..."
}
```
