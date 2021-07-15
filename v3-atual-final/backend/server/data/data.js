//Este arquivo é onde se encontra a interação com o banco de dados, criando uma variável database
//basta retornar o databe.(invorcar o métod que deseja), nesta situação foi utilizado o 'query' e 'none'

const database = require('../database/database');

/////////////////////////////////////////  Pets ///////////////////////////////////////////////////

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
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no corpo do body no postman

    console.log(pet);
    return database.one('insert into pet (idcliente, nome, raca, idade, peso, altura, sexo, imagem) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [pet.idcliente, pet.nome, pet.raca, pet.idade, pet.peso, pet.altura, pet.sexo, pet.imagem]);
}


/////////////////////////////////////////  Cliente ///////////////////////////////////////////////////


//Conexão com o banco onde vai buscar toda informação da tabela
exports.getClientes = function () {
    return database.query('select * from cliente');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o id passado
exports.getCliente = function(codigo) {
    return database.query('select * from cliente where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado
exports.deleteCliente = function(codigo){
    return database.none('delete from cliente where codigo =', [codigo]);
}

//Conexão onde vai se pego um json o parâmetro (book) onde contém dados do livro e é inserido 
exports.saveCliente = function(cliente) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into cliente (nome, endereco, telefone) values ($1, $2, $3) returning *', [cliente.nome], [cliente.endereco], [cliente.telefone]);
}

/////////////////////////////////////////////////   Usuario  //////////////////////////////////////////////////////

exports.getUsuarios = function () {
    return database.query('select * from usuario');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o codigo passado
exports.getUsuario = function(idusuario) {
    return database.query('select * from usuario where idusuario = $1', [idusuario]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo codigo passado
exports.deleteUsuario = function(idusuario){
    return database.none('delete from usuario where idusuario =', [idusuario]);
}

//Conexão onde vai se pego um json o parâmetro (usuario) onde contém dados do pedido e é inserido 
exports.saveUsuario = function(usuario) {
    return database.one('insert into usuario(idcliente, email, senha) values($1, $2, $3) returning *', [ usuario.idcliente, usuario.email, usuario.senha]);
}

exports.getLogin = function(usuario) {
    return database.query('select * from usuario where email = $1 and senha = $2', [usuario.email, usuario.senha]);
}














exports.getPedidos = function () {
    return database.query('select * from pedido');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o codigo passado
exports.getPedido = function(codigo) {
    return database.query('select * from pedido where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo codigo passado
exports.deletePedido = function(codigo){
    return database.none('delete from pedido where codigo =', [codigo]);
}

//Conexão onde vai se pego um json o parâmetro (pedido) onde contém dados do pedido e é inserido 
exports.savePedido = function(pedido) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into pedido (codigoCliente, dataCompra, valorTotalCompra) values ($1, $2, $3) returning *', [pedido.codigoCliente], [cliente.dataCompra], [cliente.valorTotalCompra]);
}

/////////////////////////////////////////////////   Usuários //////////////////////////////////////////////////////


