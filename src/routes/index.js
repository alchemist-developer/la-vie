const express = require("express");
const PsicologosController = require("../controllers/psicologosController");
const PacientesController = require("../controllers/pacientesController");
const AtendimentosController = require("../controllers/atendimentosController");
const psicologosValidation = require("../validators/psicologos/psicologosValidation");
const pacientesValidation = require("../validators/pacientes/pacientesValidation");
const atendimentosValidation = require("../validators/atendimentos/atendimentosValidation");
const authController = require("../controllers/authController");
const loginValidation = require("../validators/auth/authLogin");
const auth = require("../middlewares/auth");
const routes = express.Router();

routes.get("/psicologos", PsicologosController.listarPsicologos);
routes.get("/psicologos/:id", PsicologosController.listarPsicologoId);
routes.post(
  "/psicologos",
  psicologosValidation,
  PsicologosController.cadastrarPsicologo
);
routes.delete("/psicologos/:id", PsicologosController.deletarPsicologo);
routes.put("/psicologos/:id", PsicologosController.atualizarPsicologo);

routes.get("/pacientes", PacientesController.listarPacientes);
routes.get("/pacientes/:id", PacientesController.listarPacienteId);
routes.post(
  "/pacientes",
  pacientesValidation,
  PacientesController.cadastrarPaciente
);
routes.delete("/pacientes/:id", PacientesController.deletarPaciente);
routes.put("/pacientes/:id", PacientesController.atualizarPaciente);

routes.post("/login", loginValidation, authController.login);

routes.get("/atendimentos", AtendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", AtendimentosController.listarAtendimentoById);
routes.post(
  "/atendimentos",
  auth,
  atendimentosValidation,
  AtendimentosController.cadastrarAtendimento
);

module.exports = routes;
