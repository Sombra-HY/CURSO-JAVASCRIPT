/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo

Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.
Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/


// Construtora MOLDE (Classes)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Pessoa.prototype.nomecompleto = function(){
        return this.nome + ' '+ this.sobrenome;
    } 
}
// Pessoa.prototype.nomecompleto = function(){
//     return this.nome + ' '+ this.sobrenome;
// } 


// instancia
const p1  = new Pessoa('lucas', 'Sombra'); // <- Funcao Construtora
const p2  = new Pessoa('Joao', 'Silva'); // <- Funcao Construtora


console.log(p1.nomecompleto());


// No lugar de criar uma objeto com varios metodos como o p1, é 
// possivel colocar estes metodos no prototype

// PAI (prototype) --> FIlHO(P1)
// colocando valores essenciais no filho e 
// pegando valores do prototype, no caso os metodos que sao igual pra todos



console.dir(p1);