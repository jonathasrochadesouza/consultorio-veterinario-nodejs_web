const database = require('../database/database');

exports.getRemedios = function () {
    return database.query('select * from remedio');
}

exports.getRemedio = function(idremedio) {
    return database.query('select * from remedio where idremedio = $1', [idremedio]);
}

exports.deleteRemedio = function(idremedio){
    return database.none('delete from remedio where idremedio = $1', [idremedio]);
}

exports.saveRemedio = function(remedio) {
    return database.one('insert into remedio(nome, pilulas, mlg, fornecedor, validade) values($1, $2, $3, $4, $5) returning *', [ remedio.nome, remedio.pilulas, remedio.mlg, remedio.fornecedor, remedio.validade]);
}
