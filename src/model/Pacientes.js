const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
  {
    id_paciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_paciente",
    },
    nome_paciente: {
      type: DataTypes.STRING,
      field: "nome_paciente",
    },
    email: {
      type: DataTypes.STRING,
      field: "email",
    },
    idade: {
      type: DataTypes.STRING,
      field: "idade",
    },
  },
  {
    tableName: "paciente",
    timestamps: false,
  }
);
module.exports = Pacientes;
