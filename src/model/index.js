//criar relacionamento de paciente e psicologos
const Pacientes = require("../validators/pacientes");
const Psicologos = require("../validators/psicologos");
const Atendimentos = require("../validators/atendimentos");

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "psicologos_paciente",
});

Atendimentos.belongsTo(Pacientes, {
  foreignKey: "paciente_psicologos",
});

module.exports = {
  Pacientes,
  Psicologos,
  Atendimentos,
};