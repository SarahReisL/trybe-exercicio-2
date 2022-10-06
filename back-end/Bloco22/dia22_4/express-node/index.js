const express = require('express');

const app = express(); // cria a aplicação

app.use(express.json()); // para que o express entenda o formato json

app.get('/ping', (request, response) => {
    response.status(200).json({ message: 'pong' })
}) // rota para o ping

app.listen(3000, () => console.log('Server running on port 3000')) // inicia o servidor na porta 3000

