DROP DATABASE IF EXISTS processos;

CREATE DATABASE IF NOT EXISTS processos;

USE processos;

CREATE TABLE IF NOT EXISTS empresas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS inscricoes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    empresa INT NOT NULL,
    data_inscricao DATE NOT NULL,
    data_retorno DATE,
    STATUS VARCHAR(20),
    FOREIGN KEY (empresa) 
        REFERENCES empresas(id)
        ON DELETE CASCADE
);

/* table de habilidades */
CREATE TABLE IF NOT EXISTS habilidades (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    level VARCHAR(20)
);

/* table de inscricao_habilidades */
CREATE TABLE IF NOT EXISTS inscricao_habilidades (
    id_inscricao INT,
    id_habilidades INT,
    FOREIGN KEY (id_inscricao) 
        REFERENCES inscricoes(id)
        ON DELETE CASCADE,
    FOREIGN KEY (id_habilidades) 
        REFERENCES habilidades(id)
        ON DELETE CASCADE,
    PRIMARY KEY (id_inscricao, id_habilidades)
);

INSERT INTO empresas (nome) 
VALUES ('Google'),
       ("Trybe");

INSERT INTO inscricoes (empresa, data_inscricao, STATUS) VALUES (1, '2022-01-01', 'Aprovado');

INSERT INTO habilidades (name, level) VALUES ('JavaScript', 'Junior');

INSERT INTO inscricao_habilidades (id_inscricao, id_habilidades) VALUES (1, 1);