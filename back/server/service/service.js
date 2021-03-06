const data = require('../data/data');


exports.getPets =  function (){
    return data.getPets();
}

exports.getPet = function (petId) {
    return data.getPet(petId);
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


//////////////////////////////////////////////      Usuario     /////////////////////////////////////////////////////

exports.getUsuarios =  function (){
    return data.getUsuarios();
}

exports.getUsuario = function (idusuario) {
    return data.getUsuario(idusuario);
}

exports.deleteUsuario = function (idusuario) {
    return data.deleteUsuario(idusuario);
}

exports.saveUsuario = function (usuario) {
    return data.saveUsuario(usuario);
}

exports.getLogin = function (usuario) {
    return data.getLogin(usuario);
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

