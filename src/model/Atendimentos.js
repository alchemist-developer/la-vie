const db = require("../database");
const DataTypes = require("sequelize");
const Psicologos  = require("./Psicologos");
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
    data: {
      type: DataTypes.DATE,
      field: "data_atendimento",
    },
    paciente_psicologos: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id_paciente"
      },
      field: "paciente_psicologos",
    },
    psicologos_paciente: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id_pacientes"
      },
      field: "psicologos_paciente",
    },
    observacao: {
      type: DataTypes.STRING(1000),
      field: "observacao",
    },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);
module.exports = Atendimentos;
