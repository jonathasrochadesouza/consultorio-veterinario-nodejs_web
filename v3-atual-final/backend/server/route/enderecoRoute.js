const express = require('express');
const { deleteEndereco } = require('../service/enderecoService');
const router = express.Router();
const service = require('../service/enderecoService');

router.get('/remedios', async function(req, res){
    const endereco = await service.getEnderecos();
    res.json(endereco);
});

router.get('/endereco/:id', async function (req, res){
    const endereco = await service.getEndereco(req.params.id);
    res.json(endereco);
});

router.delete('/endereco/:id', async function (req, res) {
    deleteEndereco(req.params.id);
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

router.post('/endereco:id', async function (req, res) {
    const endereco = req.body;
    endereco.idcliente = req.params.id;
    console.log("Endereço")
    console.log(endereco)

    const newEndereco = await service.saveEndereco(endereco);
    if (newEndereco != "") {
        console.log(newEndereco)
        return res.status(200).json(newEndereco);
    }
    else {
        console.log('erro')
        return res.status(401).json({});
    }
});

module.exports = router;