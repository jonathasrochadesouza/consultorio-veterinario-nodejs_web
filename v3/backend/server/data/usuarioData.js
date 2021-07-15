const database = require('../database/database');

//Criptograr senha
const { encrypt, decrypt } = require('../route/crypto');


exports.getUsuarios = function () {
    return database.query('select * from usuario');
}

exports.getUsuario = function(idusuario) {
    return database.query('select * from usuario where idusuario = $1', [idusuario]);
}

exports.deleteUsuario = function(idusuario){
    return database.none('delete from usuario where idusuario = $1', [idusuario]);
}

exports.getEmail = function(email) {
    return database.query('select * from usuario where email = $1', [email]);
}

exports.saveUsuario = function(usuario) {
    return database.one('insert into usuario(idcliente, email, senha, data_criacao) values($1, $2, $3, $4) returning *', [ usuario.idcliente, usuario.email, encrypt(usuario.senha), usuario.data_criacao]);
}

exports.getLogin = function(usuario) {
    console.log(encrypt(usuario.senha));
    return database.query('select * from usuario where email = $1 and senha = $2', [usuario.email, encrypt(usuario.senha)]);
}
