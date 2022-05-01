const express = require('express'); // importando express

const { route } = require('express/lib/application');
const pacientesController = require('../controllers/controllersPaciente');
const psicologosController = require('../controllers/controllersPsicologos');
const atendimentoController = require('../controllers/controllersAtendimentos');


const routes = express.Router(); // ativando recurso de rotas (./router/index.js), sendo que o index.js e chamado automativamente


routes.get("/pacientes", pacientesController);
routes.get("/pacientes/:id", pacientesController);
routes.post("/pacientes", pacientesController);
routes.put("/pacientes/:id", pacientesController);
routes.delete("/pacientes/:id", pacientesController);


routes.get("/psicologos", psicologosController);
routes.get("/psicologos/:id", psicologosController);
routes.post("/psicologos", psicologosController);
routes.put("/psicologos/:id", psicologosController);
routes.delete("/psicologos/:id", psicologosController);


routes.get("/atendimentos", atendimentoController);
routes.get("/atendimentos/:id", atendimentoController);
routes.post("/atendimentos", atendimentoController);


module.exports = routes; // precisamos exportar o module para app.js