// funcao construtora -> Objetos
// funcao fabrica --> Objetos
// Construtora --> Pessoa (new)

function Pessoa( nome, sobrenome, idade){
    // Atributos ou metodos PRIVADOS
    // este valores nao estao disponiveis fora do escopo

    const valor = 2;
    const valor2 = 2;


    // PUBLICO

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.dados =  function (){
        for(let i in this){
            console.log(i,this[i]);
        }
    };
    
}

let p1 = new Pessoa( 'Lucas','Sombra',19);
p1.dados();
console.log(p1.valor); // <-- indefinido fora 
