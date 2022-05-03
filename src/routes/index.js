const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const authController = require("../controllers/authController");
const loginValidation = require("../validators/auth/authLogin");
const psicologosValidation = require("../validators/psicologos/psicologosValidation");
const pacientesValidation = require("../validators/pacientes/pacientesValidation");
const autentication = require("../middleware/autentication");

const routes = express.Router(); // ativando recurso de rotas (./router/index.js), sendo que o index.js e chamado automativamente

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologoId);
routes.post(
  "/psicologos",
  psicologosValidation,
  psicologosController.cadastrarPsicologo
);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);

routes.get("/pacientes", autentication, pacientesController.listarPacientes);
routes.get(
  "/pacientes/:id",
  autentication,
  pacientesController.listarPacienteId
);
routes.post(
  "/pacientes",
  autentication,
  pacientesValidation,
  pacientesController.cadastrarPaciente
);
routes.delete(
  "/pacientes/:id",
  autentication,
  pacientesController.deletarPaciente
);
routes.put(
  "/pacientes/:id",
  autentication,
  pacientesController.atualizarPaciente
);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentosId);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento);

routes.post("/login", loginValidation, authController.login);

module.exports = routes;
