const express = require("express");
const PsicologosController = require("../controllers/psicologosController");
const PacientesController = require("../controllers/pacientesController");
const AtendimentosController = require("../controllers/atendimentosController");
const psicologosValidation = require("../validators/psicologos/psicologosValidation");
const pacientesValidation = require("../validators/pacientes/pacientesValidation");
const atendimentosValidation = require("../validators/atendimentos/atendimentosValidation");
const authController = require("../controllers/authController");
const loginValidation = require("../validators/auth/authLogin");
const dashController = require('../controllers/dashController');
const auth = require("../middlewares/auth");
const routes = express.Router();

// rotas de psicologos

routes.get("/psicologos", PsicologosController.listarPsicologos);
routes.get("/psicologos/:id", PsicologosController.listarPsicologoId);
routes.post("/psicologos", psicologosValidation, PsicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", PsicologosController.deletarPsicologo);
routes.put("/psicologos/:id", PsicologosController.atualizarPsicologo);

// rotas de pacientes

routes.get("/pacientes", PacientesController.listarPacientes);
routes.get("/pacientes/:id", PacientesController.listarPacienteId);
routes.post("/pacientes", pacientesValidation, PacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", PacientesController.deletarPaciente);
routes.put("/pacientes/:id", PacientesController.atualizarPaciente);

// rotas de atendimentos

routes.get("/atendimentos", AtendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", AtendimentosController.listarAtendimentoById);
routes.post("/atendimentos", auth, atendimentosValidation, AtendimentosController.cadastrarAtendimento);

// rotas do dashboard

routes.get('/dashboard/num-pacientes', dashController.buscarNumeroPacientes);
routes.get('/dashboard/num-atendimentos', dashController.buscarNumeroAtendimentos);
routes.get('/dashboard/num-psicologos', dashController.buscarNumeroPsicologos);
routes.get('/dashboard/mma-atendimentos', dashController.buscarMedia);

// rota de login 

routes.post("/login", loginValidation, authController.login);

module.exports = routes;
