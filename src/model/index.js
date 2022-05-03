//criar relacionamento de paciente e psicologos
const Pacientes = require("../validators/pacientes");
const Psicologos = require("../validators/pacientes");
const Atendimentos = require("../validators/auth");

Pacientes.belongsToMany(Psicologos, {
	foreignKey: "id_paciente",
	through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
	foreignKey: "id_psicologo",
	through: Atendimentos,
});

Atendimentos.hasMany(Psicologos, {
	foreignKey: "id_psicologo",
});

Atendimentos.hasMany(Pacientes, {
	foreignKey: "id_paciente",
});

module.exports = {
	Pacientes,
	Psicologos,
	Atendimentos,
};