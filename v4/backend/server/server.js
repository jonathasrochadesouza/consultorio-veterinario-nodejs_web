//Parte incicial do servidor que irá importar as rotas necessárias
const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./route/routes');
const petRouter = require('./route/petRoute');
const usuarioRouter = require('./route/usuarioRoute');
const remedioRouter = require('./route/remedioRoute');
const clienteRouter = require('./route/clienteRoute');
const enderecoRouter = require('./route/enderecoRoute')

app.use(express.json());
app.use(cors());
app.use(petRouter);
app.use('/uploads', express.static('uploads'));
app.use(usuarioRouter);
app.use(remedioRouter);
app.use(clienteRouter);
app.use(enderecoRouter);
app.listen(3111);

