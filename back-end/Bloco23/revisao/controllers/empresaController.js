// o controller é o que faz a chamada para o service e o service chama o model
// controller no MSC é o mesmo que middleware 
const empresaService = require('../services/empresaService');
// chamar a funcao de empresas getAll com a estrutura do middleware
const getAll = async (req, res) => {
    const resultado = await empresaService.getAll();
    res.status(200).json(resultado);
};

module.exports = { getAll };