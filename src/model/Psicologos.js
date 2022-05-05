const db = require("../database");

const { DataTypes } = require("sequelize");
const Psicologos = db.define(
  "Psicologos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    nome: {
      type: DataTypes.STRING,
      field: "nome",
    },
    email: {
      type: DataTypes.STRING,
      field: "email",
    },
    senha: {
      type: DataTypes.STRING,
      field: "senha",
    },
    apresentacao: {
      type: DataTypes.STRING,
      field: "apresentacao",
    },
  },
  {
    tableName: "psicologos",
    timestamps: false,
  }
);
module.exports = Psicologos;
