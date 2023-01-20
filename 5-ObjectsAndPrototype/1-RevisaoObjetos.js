//Funcoes Construtoras// Classes // Factory functions

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
let p1 = new Pessoa('lucas', 'Sombra');

// NEW

// o new faz com que a funcao se comporte como uma 'class'
// ela faz o this <-- ser um objeto {} similar ao python o self
// e retorna o objeto por padrao, sem a nomeclatura return
// this == {}