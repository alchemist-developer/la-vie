const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_paciente"
    },
    nome: {
      type: DataTypes.STRING,
      field: "nome_paciente"
    },
    email: {
      type: DataTypes.STRING,
      field: "email"
    },
    idade: {
      type: DataTypes.STRING,
      field: "idade"
    },
  },
  {
    tableName: "paciente",
    timestamps: false
  }
);
module.exports = Pacientes;
