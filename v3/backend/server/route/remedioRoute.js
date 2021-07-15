const express = require('express');
const { deleteRemedio } = require('../service/remedioService');
const router = express.Router();
const service = require('../service/remedioService');

router.get('/remedios', async function(req, res){
    const remedios = await service.getRemedios();
    res.json(remedios);
});

router.get('/remedio/:id', async function (req, res){
    const remedio = await service.getRemedio(req.params.id);
    res.json(remedio);
});

router.delete('/remedio/:id', async function (req, res) {
    console.log('route');
    deleteRemedio(req.params.id);
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

router.put('/remedio', async function (req, res) {
    const remedio = req.body;
    const newRemedio = await service.saveRemedio(remedio);
    res.json(newRemedio);
});

module.exports = router;