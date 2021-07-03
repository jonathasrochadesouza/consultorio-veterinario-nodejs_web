//Parte incicial do servidor que irá importar as rotas necessárias
const express = require('express');
const cors = require('cors');
const app = express();


//Pegar a rota dao arquivo de rotas para não ficar poluido
const router = require('./route/routes');
// const cliente = require('./route/clienteRoute');

app.use(express.json());
app.use(cors());
app.use(router);
// app.use(cliente);
app.listen(3000);

