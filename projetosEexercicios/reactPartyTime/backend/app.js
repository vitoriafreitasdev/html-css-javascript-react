
// importa express
const express = require("express");
// importa cors
const cors = require("cors");
// para invocar o express
const app = express();

app.use(cors());
// permite a comunicação via JSON
app.use(express.json());

// DB Connection => para fazer a conexão com o banco de dados

const conn = require("./db/conm.js");

conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

// inicia o servidor.
app.listen(3000, function () {
  console.log("Servidor Online!");
});


