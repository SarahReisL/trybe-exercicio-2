const express = require('express');
require('dotenv/config');

const routes = require('./routes/index'); 

const app = express();

app.use('/empresa', routes.empresaRoute); // usar as rotas do empresaRoute

const PORT = process.env.PORT || 4000;

// usar a varia vel que esta na pagina ambiente
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

