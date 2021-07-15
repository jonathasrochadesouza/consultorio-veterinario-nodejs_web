const data = require('../data/usuarioData');

exports.getUsuarios =  function (){
    return data.getUsuarios();
}

exports.getUsuario = function (idusuario) {
    return data.getUsuario(idusuario);
}

exports.deleteUsuario = function (idusuario) {
    return data.deleteUsuario(idusuario);
}

exports.getEmail = function (email) {
    return data.getEmail(email);
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
 exports.getPassword = function(email) {
    return data.getPassword(email);
}