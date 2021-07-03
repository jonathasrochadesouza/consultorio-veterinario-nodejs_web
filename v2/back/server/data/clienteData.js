/*
 * const database
 */
const database = require('../database/database');

/**
 * get list cliente
 * 
 * @returns 
 */
exports.getClientes = function () {
    return database.query('select * from cliente');
}

/**
 * get a cliente
 * 
 * @param {*} clienteId 
 * @returns 
 */
exports.getCliente = function(clienteId) {
    return database.query('select * from cliente where idcliente = $1', [clienteId]);
}

/**
 * delete a cliente
 * 
 * @param {*} clienteId 
 * @returns 
 */
exports.deleteCliente = function(clienteId){
    return database.none('delete from cliente where idcliente = $1', [clienteId]);
}

/**
 * create/insert a cliente 
 * 
 * @param {*} cliente 
 * @returns 
 */
exports.saveCliente = function(cliente) {
    return database.one('insert into cliente (idanimal, idendereco, nome, email, telefone) values ($1, $2, $3, $4, $5) returning *', [cliente.idanimal, cliente.idendereco, cliente.nome, cliente.email, cliente.telefone]);
}