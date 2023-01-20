// Reduce
// pode ser usado como um filter ou map, mas nao e recomendado
// inicialmente ele reduz a um unico elemeneto 

const { acceptsArray } = require("expres/utils");

const pessoas = [
    {nome: 'Luiz', sobrenome: 'Souza', idade:46},
    {nome: 'Alissom', sobrenome: 'Martins', idade:15},
    {nome: 'Maria', sobrenome: 'Oliveira', idade:19},
    {nome: 'Gabriela', sobrenome: 'Vertins', idade:35},
    {nome: 'Junior', sobrenome: 'Arruda', idade:22}
];

//sintaxe : reduce( funcao, inicializador do acumulador ) 
// na funcao e esperado ( acumulador, valor, indice, array )

const lista = pessoas.reduce(function (acumulador, valor, indice, array){
    acumulador += valor.idade;
    return acumulador;
},0); // <-- acumulador inicializa com []

const lista2 = pessoas.reduce(function (acumulador, valor, indice, array){
    if(valor.idade>20) acumulador.push(valor.nome);
    return acumulador;
},[]);

console.log(lista);
console.log(`Pessoas com mais de 20 anos = ${ lista2}`);