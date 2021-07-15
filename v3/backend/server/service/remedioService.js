const data = require('../data/remedioData');

exports.getRemedios =  function (){
    return data.getRemedios();
}

exports.getRemedio = function (idremedio) {
    return data.getRemedio(idremedio);
}

exports.deleteRemedio = function (idremedio) {
    console.log('service');
    return data.deleteRemedio(idremedio);
}

exports.saveRemedio = function (remedio) {
    return data.saveRemedio(remedio);
}