const fs = require('fs');
const { resolve } = require('path');

module.exports = function (caminho){
    fs.readFile(caminho,'utf-8',function(err,sucess){
        console.log(err||sucess);
    });
}