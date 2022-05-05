const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "atendimentos_id",
    },
    data_atendimento: {
      type: DataTypes.DATE,
      field: "data_atendimento",
    },
    observacao: {
      type: DataTypes.STRING,
      field: "observacao",
    },
    paciente_psicologos: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id",
      },
      field: "paciente_psicologos",
    },
    psicologos_paciente: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id",
      },
      field: "psicologos_paciente",
    },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);
module.exports = Atendimentos;