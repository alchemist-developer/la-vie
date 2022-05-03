CREATE DATABASE la_vie;
USE la_vie;
CREATE TABLE psicologos(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(50),
    apresentacao VARCHAR(1000));
CREATE TABLE pacientes(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    idade DATE
);
CREATE TABLE atendimentos(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_atendimento DATE,
    observacao VARCHAR(1000),
    psicologo_id INTEGER NOT NULL,
    paciente_id INTEGER NOT NULL,
    
CONSTRAINT atendimentos_psicologo FOREIGN KEY
(psicologo_id) REFERENCES psicologos(id),

CONSTRAINT atendimentos_paciente FOREIGN KEY
(paciente_id) REFERENCES pacientes(id)
);