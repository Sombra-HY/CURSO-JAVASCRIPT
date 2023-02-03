//           NODE - IMPORTANDO 

const mod = require('./mod');


// Ao chamar o require ele retorna um objeto com os elementos que forma exportados
// é possivel fazer destruturacao do retorno exemplo

// const {nome, funcao, variavel } = require('./caminho')

console.log(mod.NOME);
console.log(mod.curso);
console.log(mod.sobrenome);
console.log(mod.falaNome);

const funcao = mod.falaNome;


//                MODULOS EXTERNOS

const axios = require('axios')