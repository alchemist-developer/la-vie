const sequelize = require("sequelize");

const DB_NAME = "la-vie";
const DB_USER = "root";
const DB_PASS = "290595@ABc";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

//objeto para guardar a conexao do banco de dados
let db = {};

try {
  db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar uma conexao com o banco de dados");
}

//funcao para testar conexao do banco de dados//
async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados 1");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
