// Filter
// filtra valores atraves de funcao de callback e retorna a 
// mesma quantidade ou menos de elementos
// filter( valor, indice , lista)

function exemplo1(){
    //                0  1  2  3  4  5  6 ...
    const numeros = [22, 89, 56, 22, 2, 1, 56, 12, 445,4,655,233,12,2,0,49,26];

    // valores maiores que 10
    // o filter exige que seja retornado true para algo 
    // que deseje adicionar na lista e false que nao deseje

    function callbackFilter(valor, indice, array){
        return (valor>10);
    }
    // passar apenas a referencia, se for funcao explicita
    let numfiltrados = numeros.filter(callbackFilter);



    // ANONIMA
    // mesma funcao que a de cima, so que usando arrow functions e
    // e por ter apenas uma linha de codigo, como tambem, um parametro
    // pode ser resumida
    numfiltrados = numeros.filter(valor=> valor>10);
    console.log(numfiltrados);

}

function exemplo2(){
    
    // Pessoas com mais de tal idade
    // Pessoas com nome comecando com tal letra
    // Pessoas com mais de tal quantidade de letras no nome

    const pessoas = [
        {nome: 'Luiz', sobrenome: 'Souza', idade:46},
        {nome: 'Alissom', sobrenome: 'Martins', idade:15},
        {nome: 'Maria', sobrenome: 'Oliveira', idade:19},
        {nome: 'Gabriela', sobrenome: 'Vertins', idade:35},
        {nome: 'Junior', sobrenome: 'Arruda', idade:22}
    ];
    

    let Filtro1 = pessoas.filter(valor => valor.idade>=20);
    let Filtro2 = pessoas.filter(valor => valor.nome[0]==='L');
    let Filtro3 = pessoas.filter(valor => valor.nome.length===5);
    console.log(Filtro1,'\n',Filtro2,'\n',Filtro3);
}
exemplo2();
