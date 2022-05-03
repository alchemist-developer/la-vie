const db = require("../database");

const { DataTypes } = require("sequelize");
const Psicologos = db.define(
  "Psicologos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_psicologos"
    },
    nome: {
      type: DataTypes.STRING,
      field: "nome_psicologo"
    },
    email: {
      type: DataTypes.STRING,
      field: "email"
    },
    senha: {
      type: DataTypes.STRING,
      field: "senha_psicologo"
    },
    apresentacao: {
      type: DataTypes.STRING,
      field: "apresentacao",
    },
  },
  {
    tableName: "psicologos",
    timestamps: false
  }
);
module.exports = Psicologos;
