// criando o modelo de empresas - VALIDAR NOSSO CONNECTION - para executar o banco de dados
const connection = require('./connection');

// fazendo afuncao que acessa o banco e exibe a equipe
// diferença de query e execute- pq execute retorna uma promisse e otimiza a query
const getAll = async () => {
    const [result] = await connection.query('SELECT * FROM empresas');
    return result;
};

module.exports = { getAll };