// service funcao de passagem de parametros para o modelo

const empresaModel = require('../models/empresaModel');
// chamar a funcao de empresas getAll
const getAll = async () => {
    if (Math.random() < 0.5) return null; // simula um condicional de sorte ou erro
    return empresaModel.getAll();
}
// const getAll = async () => empresaModel.getAll(); // func com retorno implicito
module.exports = { getAll };

