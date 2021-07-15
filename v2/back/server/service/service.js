const data = require('../data/data');


exports.getPets =  function (){
    return data.getPets();
}

exports.getPet = function (bookId) {
    return data.getPet(bookId);
}

exports.deletePet6 = function (petId) {
    return data.deletePet(petId);
}

exports.savePet = function (pet) {
    return data.savePet(pet);
}
//////////////////////////////////////////////Cliente/////////////////////////////////////////////////////////
exports.getClientes =  function (){
    return data.getClientes();
}

exports.getCliente = function (codigo) {
    return data.getCliente(codigo);
}

exports.deleteCliente = function (codigo) {
    return data.deleteCliente(codigo);
}

exports.saveCliente = function (cliente) {
    return data.saveCliente(cliente);
}

//////////////////////////////////////////////      Pedidos     /////////////////////////////////////////////////////

exports.getPedidos =  function (){
    return data.getPedidos();
}

exports.getPedido = function (codigo) {
    return data.getPedido(codigo);
}

exports.deletePedido = function (codigo) {
    return data.deletePedido(codigo);
}

exports.savePedido = function (pedido) {
    return data.savePedido(pedido);
}

//////////////////////////////////////////////      Pedidos     /////////////////////////////////////////////////////

exports.getUsuarios =  function (){
    return data.getUsuarios();
}

exports.getUsuario = function (codigo) {
    return data.getUsuario(codigo);
}

exports.deleteUsuario = function (codigo) {
    return data.deleteUsuario(codigo);
}

exports.saveUsuario = function (usuario) {
    return data.saveUsuario(usuario);
}

exports.getLogin = function (usuario) {
    return data.getLogin(usuario);
}

/**
 * get password
 * 
 * @param {*} usuario
 * @returns 
 */
 exports.getPassword = function(usuario) {
    return data.getPassword(usuario);
}

///////////////////////////////////////////////////////////////////////////////
