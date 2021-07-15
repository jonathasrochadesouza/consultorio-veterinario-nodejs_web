const data = require('../data/enderecoData');

exports.getEnderecos =  function (){
    return data.getEnderecos();
}

exports.getEndereco = function (idendereco) {
    return data.getEndereco(idendereco);
}

exports.deleteEndereco = function (idendereco) {
    return data.deleteEndereco(idendereco);
}

exports.saveEndereco = function (endereco) {
    return data.saveEndereco(endereco);
}