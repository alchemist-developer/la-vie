const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");
const db = require("./src/database");
const handleError = require('./src/middleware/handleError');
const PORT = 3000;
const app = express();

db.hasConection();

app.use(express.json()); // importante usar a funcao em json antes da routes(rotas) -- quero utilizar a estrutura de json
app.use(cors());
app.use(routes); // use as rotas externas criadas
app.use(handleError);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)); // cria o servidor na porta 3000