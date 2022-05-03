const Pacientes = require("../model/Pacientes");

const PacientesController = {
  async listarPacientes(req, res) {
    try {
      const listaDePacientes = await Pacientes.findAll();
      res.status(200).json(listaDePacientes);
    } catch (error) {
      res.json("Não foi possível listar os pacientes");
      console.error(error);
    }
  },
  async listarPacienteId(req, res) {
    const { id } = req.params;
    try {
      const pacienteID = await Pacientes.findByPk(id);
      if (!pacienteID) {
        return res.status(404).json("Não existe paciente com o ID: " + id);
      }
      res.status(200).json("Sucesso " + pacienteID);
    } catch (error) {
      res.status(500).json("Não foi possivel listar o paciente pelo ID");
    }
  },
  async cadastrarPaciente(req, res) {
    try {
      const { nome_paciente, email, idade } = req.body;
      const novoPaciente = await Pacientes.create({ nome_paciente, email, idade });
      return res.status(201).json("Sucesso " + novoPaciente);
    } catch (error) {
      res.status(400).json("Não foi possivel cadastrar o paciente");
    }
  },
  async deletarPaciente(req, res) {
    const { id } = req.params;
    try {
      const pacienteId = await Pacientes.destroy({
        where: {
          id,
        },
      });
      res.status(204).json("Deletado com sucesso " + id);

      if (!pacienteId) {
        return res.status(404).json("Não existe paciente com o id " + id);
      }
    } catch (error) {
      res.status(400).json("Não foi possivel deletar o paciente");
    }
  },

  /* inutilizado */
  async atualizarPaciente(req, res) {
    const { id } = req.params;
    try {
      const { nome_paciente, email, idade } = req.body;
      const atualizarPaciente = await Pacientes.update(
        { nome_paciente, email, idade },
        {
          where: {
            id,
          },
        }
      );
      return res.status(201).json("Paciente atualizado com sucesso");
    } catch (error) {
      res.status(400).json("Não foi possivel atualizar o paciente");
    }
  },
};

module.exports = PacientesController;