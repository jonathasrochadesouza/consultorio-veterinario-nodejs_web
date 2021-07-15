const data = require('../data/petData');

exports.getPets =  function (){
    return data.getPets();
}

exports.getPet = function (petId) {
    return data.getPet(petId);
}

exports.deletePet = function (petId) {
    return data.deletePet(petId);
}

exports.savePet = function (pet) {
    return data.savePet(pet);
}

exports.saveImage = function (imagem, idcliente) {
    return data.saveImage(imagem, idcliente);
}