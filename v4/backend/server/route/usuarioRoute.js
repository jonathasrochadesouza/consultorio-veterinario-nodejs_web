const express = require('express');
const { deleteUsuario } = require('../data/usuarioData');
const router = express.Router();
const service = require('../service/usuarioService');
const { encrypt, decrypt } = require('../route/crypto');
const mail = require('../mail/mail');
const crypto = require('../route/crypto');

router.get('/usuarios', async function(req, res){
    const usuarios = await service.getUsuarios();
    res.json(usuarios);
});

router.get('/usuario/:idcliente', async function (req, res){
    const usuario = await service.getUsuario(req.params.idcliente);
    res.json(usuario);
});

router.delete('/usuario/:idcliente', async function (req, res) {
    deleteUsuario(req.params.idcliente);
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

router.put('/usuario', async function (req, res) {
    const usuario = req.body;
    const existe = await service.getEmail(usuario.email);

    if (existe != "") {
        return res.status(422).json({});
    }
    else {
        const newUsuario = await service.saveUsuario(usuario);
        return res.status(200).json({});
    }
});

router.post('/login', async function(req, res){
    const usuario = req.body;
    const login = await service.getLogin(usuario);

    if (login != "") {
        return res.status(200).json({});
    }
    else {
        console.log('erro')
        return res.status(401).json({});
    }
});


/**
 * return a password by email
 */
router.get('/password/:email', async function (req, res){
    const password = await service.getPassword(req.params.email);
    const pass = password[0].senha;
    
    console.log(pass);
    
    const decrypt_pass = decrypt(pass);

    mail.getMailer(req.params.email, 'Sua senha é: ' + decrypt_pass);

        return res.status(200).json({});
    
});

//Exportamos a rota para ser visivel em outros arquivos
module.exports = router;