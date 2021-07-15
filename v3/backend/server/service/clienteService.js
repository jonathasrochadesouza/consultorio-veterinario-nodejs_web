/*
 * const clienteData
 */
const clienteData = require('../data/clienteData');

/**
 * get list clientes
 * 
 * @returns 
 */
exports.getClientes =  function() {
    return clienteData.getClientes();
}

/**
 * get a cliente
 * 
 * @param {*} clienteId 
 * @returns 
 */
exports.getCliente = function(clienteId) {
    return clienteData.getCliente(clienteId);
}

/**
 * delete a cliente
 * 
 * @param {*} clienteId 
 * @returns 
 */
exports.deleteCliente = function(clienteId) {
    return clienteData.deleteCliente(clienteId);
}

/**
 * insert a cliente
 * 
 * @param {*} cliente 
 * @returns 
 */
exports.saveCliente = function(cliente) {
    return clienteData.saveCliente(cliente);
}