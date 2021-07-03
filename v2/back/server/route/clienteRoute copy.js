/**
 * express
 */
const express = require('express');
/**
 * router
 */
const router = express.Router();
/**
 * deleteCliente
 */
const { deleteCliente } = require('../data/clienteData');
/**
 * clienteService
 */
const clienteService = require('../service/clienteService');

/**
 * return a clientes
 */
router.get('/clientes', async function(req, res){
    const clientes = await clienteService.getClientes();
    res.json(clientes);
});

/**
 * return a cliente by id
 */
router.get('/cliente/:id', async function (req, res){
    const cliente = await clienteService.getCliente(req.params.id);
    res.json(cliente);
});

/**
 * delete a cliente by id
 */
router.delete('/cliente/:id', async function (req, res) {
    deleteCliente(req.params.id);
    return res.json([{mesage: "Registro excluído com sucesso"}]);
});

/**
 * insert a cliente
 */
router.put('/cliente', async function (req, res) {
    const cliente = req.body;

    const newCliente = await clienteService.saveCliente(cliente);
    res.json(newCliente);
});

/**
 * router
 */
module.exports = router;