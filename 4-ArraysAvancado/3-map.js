// Map
// map altera os valores de um array e retorna um novo array

const pessoas = [
    {nome: 'Luiz', sobrenome: 'Souza', idade:46},
    {nome: 'Alissom', sobrenome: 'Martins', idade:15},
    {nome: 'Maria', sobrenome: 'Oliveira', idade:19},
    {nome: 'Gabriela', sobrenome: 'Vertins', idade:35},
    {nome: 'Junior', sobrenome: 'Arruda', idade:22}
];

let lista = pessoas.map((valor) => valor.nome +' '+valor.sobrenome);
console.log(lista);

