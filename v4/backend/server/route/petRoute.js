const express = require('express');
const { deletePet } = require('../data/petData');
const router = express.Router();
const service = require('../service/petService');
const multer = require('multer');
const multerConfig = require('../config/multer');
const { encrypt, decrypt } = require('./crypto');
const { response } = require('express');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
      
    },
    filename: function (req, file, cb) {
        cb(null, encrypt(new Date().toISOString()) + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/pets', async function(req, res){
    const pets = await service.getPets();
    res.json(pets);
});

//Retorno de um pet específico onde o id é o livro específico do banco de dados
router.get('/pet/:id', async function (req, res){
    const pet = await service.getPet(req.params.id);
    res.json(pet);
});

//Rota para excluir informação do banco de dado através do id passado
router.delete('/pet/:id', async function (req, res) {
    deletePet(req.params.id);
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

router.put('/pet', async function (req, res) {
    const pet = req.body;                               
    const newPet = await service.savePet(pet);
    res.json(newPet);
});

router.post('/pet:id', upload.single('imagem_pet'), async function (req, res) {  
    const idcliente = req.params.id;
    const image = req.file.path;       
                                      
    service.saveImage(image, idcliente);
    return res.json({});
});

router.get('/pet:id',  async function (req, res) {  
    const idcliente = req.params.id;
              
    service.saveImage(image, idcliente);
   return res.json({});
});

module.exports = router;