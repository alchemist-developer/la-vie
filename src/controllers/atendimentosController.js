const {
  Atendimentos,
  Pacientes,
  Psicologos,
} = require("../model/Atendimentos");

const AtendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll({
        include: [
          { model: Pacientes, attributes: ["nome_paciente"] },
          { model: Psicologos, attributes: ["nome_psicologo"] },
        ],
        attributes: ["id", "data_atendimento", "observacao"],
      });
      res.status(200).json(listaDeAtendimentos);
    } catch (error) {
      res.json("Não foi possível listar os atendimentos");
      console.error(error);
    }
  },
  async listarAtendimentosId(req, res) {
    const { id } = req.params;
    try {
      const atendimentoID = await Atendimentos.findByPk(id);
      if (!atendimentoID) {
        return res.status(404).json("Não existe atendimento com o id " + id);
      }
      res.status(200).json(atendimentoID);
    } catch (error) {
      res
        .status(400)
        .json(
          "Não foi possivel listar o atendimento pelo ID. Confirme o número do Id do atendimento e tente novamente"
        );
    }
  },
  async cadastrarAtendimento(req, res) {
    const token = req.auth.id;
    try {
      const { paciente_id, data_atendimento, observacao } = req.body;
      const novoAtendimento = await Atendimentos.create({
        paciente_id,
        data_atendimento,
        psicologos_paciente: token,
        observacao,
      });
      return res.status(201).json(novoAtendimento);
    } catch (error) {
      res.status(400).json("Não foi possivel cadastrar o atendimento");
    }
  },
};

module.exports = AtendimentosController;
