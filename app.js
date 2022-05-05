const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const db = require("./src/database");
const handleError = require("./src/middlewares/handleError");

const app = express();
app.use(cors());

db.hasConection();

app.use(express.json());
app.use(routes);
app.use(handleError);

app.listen(3000, () => console.log("Server running on porta 3000"));
