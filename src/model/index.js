//criar relacionamento de paciente e psicologos
const Pacientes = require("../validators/pacientes");
const Psicologos = require("../validators/psicologos");
const Atendimentos = require("../validators/atendimentos");

Pacientes.belongsToMany(Psicologos, {
  foreignKey: "id_paciente",
  through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
  foreignKey: "id_psicologos",
  through: Atendimentos,
});

Atendimentos.hasMany(Psicologos, {
  foreignKey: "id_psicologos",
});

Atendimentos.hasMany(Pacientes, {
  foreignKey: "id_paciente",
});

module.exports = {
  Pacientes,
  Psicologos,
  Atendimentos,
};
