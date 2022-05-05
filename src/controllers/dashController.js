const { Pacientes, Psicologos, Atendimentos } = require("../model/");

const dashController = {
  async buscarNumeroPacientes(req, res) {
    const totalPacientes = await Pacientes.count();
    res.json(totalPacientes);
  },
  async buscarNumeroAtendimentos(req, res) {
    const totalAtendimentos = await Atendimentos.count();
    res.json(totalAtendimentos);
  },
  async buscarNumeroPsicologos(req, res) {
    const totalPsicologos = await Psicologos.count();
    res.json(totalPsicologos);
  },
  async buscarMedia(req, res) {
    const totalAtendimentos = await Atendimentos.count();
    const totalPsicologos = await Psicologos.count();
    res.json(totalAtendimentos / totalPsicologos);
  },
};

module.exports = dashController;