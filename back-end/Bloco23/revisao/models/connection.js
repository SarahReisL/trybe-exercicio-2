// o connetion fornece a conexao com o banco de dados
// importando o mysql
const mysql = require('mysql2/promise');

// importando o dotenv
require('dotenv/config');

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATA_BASE,
} = process.env;

// criando a conexao com o banco de dados
const connection = mysql.createPool({
    host: DB_HOST || 'localhost',
    port: DB_PORT || 3306,
    user: DB_USER || 'root',
    password: DB_PASSWORD || 'sarahmysql',
    database: DB_DATA_BASE || 'processos'
});

module.exports = connection;