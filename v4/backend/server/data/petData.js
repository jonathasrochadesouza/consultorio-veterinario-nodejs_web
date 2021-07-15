//Este arquivo é onde se encontra a interação com o banco de dados, criando uma variável database
//basta retornar o databe.(invorcar o métod que deseja

const database = require('../database/database');

//Conexão com o banco onde vai buscar toda informação da tabela
exports.getPets = function () {
    return database.query('select * from pet ORDER BY idanimal ASC');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o id passado
exports.getPet = function(petid) {
    return database.query('select * from pet where idanimal = $1', [petid]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado sem retorno de registros
exports.deletePet = function(petid){
    return database.none('delete from pet where idanimal = $1', [petid]);
}

exports.savePet = function(pet) {
    return database.one('insert into pet (idcliente, nome, raca, idade, peso, altura, sexo, imagem) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [pet.idcliente, pet.nome, pet.raca, pet.idade, pet.peso, pet.altura, pet.sexo, pet.imagem]);
    // return database.one('insert into pet (idcliente, nome, raca, idade, peso, altura, sexo) values ($1, $2, $3, $4, $5, $6, $7) returning *', [pet.idcliente, pet.nome, pet.raca, pet.idade, pet.peso, pet.altura, pet.sexo]);
}

exports.saveImage = function(imagem, idcliente) {
    return database.one('update  pet SET imagem=$1 where idcliente=$2 returning *', [imagem, idcliente]);
}