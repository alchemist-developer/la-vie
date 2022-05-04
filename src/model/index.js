const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos');
 
Atendimentos.belongsTo(Pacientes, {
    foreignKey: "paciente_psicologos"
})


Atendimentos.belongsTo(Psicologos, {
    foreignKey: "psicologos_paciente"
})

 
module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
}
