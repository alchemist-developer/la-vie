const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
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
    idade: {
      type: DataTypes.DATE,
      field: "idade",
    },
  },
  {
    tableName: "pacientes",
    timestamps: false,
  }
);
module.exports = Pacientes;
