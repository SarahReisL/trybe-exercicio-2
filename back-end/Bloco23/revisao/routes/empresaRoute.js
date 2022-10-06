// importar o controle de rotas
const express = require('express');
const empresaController = require('../controllers/empresaController');
const empresaRoute =  express.Router();
// funciona com o app de requisições
empresaRoute.get('/', empresaController.getAll); // chamar a funcao de empresas getAll do controller como callback

module.exports = empresaRoute;