const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "atendimentos_id",
    },
    data: {
      type: DataTypes.DATE,
      field: "data_atendimento",
    },
    //paciente_psicologos: {
     // type: DataTypes.STRING,
     // field: "paciente_psicologos",
    //},
    //psicologo_pacientes: {
    //  type: DataTypes.STRING,
     // field: "psicologo_pacientes",
    //},
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);
module.exports = Atendimentos;