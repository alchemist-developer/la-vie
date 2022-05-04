//criar relacionamento de paciente e psicologos
const Pacientes = require("../validators/pacientes");
const Psicologos = require("../validators/psicologos");
const Atendimentos = require("../validators/atendimentos");

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "id_psicologos",
});

Atendimentos.belongsTo(Pacientes, {
  foreignKey: "id_paciente",
});

module.exports = {
  Pacientes,
  Psicologos,
  Atendimentos,
};