//                             NODE - EXPORTACAO

const nome = 'lucas';
const sobrenome = 'sombra';
let curso = {
    nome:'Javascript',
    plataforma: 'Udemy',
    instrutor: 'Luiz Otavio Miranda'
}
const falaNome = function(nome){
    console.log(`ola ${nome}!!`);
}

// exportando

module.exports.NOME = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
module.exports.curso = curso;

// pode exportado tambem com referencia exports. exemplo

// exports.funcao = falaNome;
// exports.curso = curso;
