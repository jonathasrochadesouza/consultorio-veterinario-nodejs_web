const database = require('../database/database');

exports.getEnderecos = function () {
    return database.query('select * from endereco');
}

exports.getEndereco = function(idendereco) {
    return database.query('select * from endereco where idendereco = $1', [idendereco]);
}

exports.deleteEndereco = function(idendereco){
    return database.none('delete from endereco where idremedio = $1', [idendereco]);
}

exports.saveEndereco = function(endereco) {
    return database.one('insert into endereco(idcliente, cep, numero, rua, cidade, bairro, estado, complemento) values($1, $2, $3, $4, $5, $6, $7, $8) returning *', [ endereco.idcliente, endereco.cep, endereco.numero, endereco.rua, endereco.cidade, endereco.bairro, endereco.estado, endereco.complemento]);
}