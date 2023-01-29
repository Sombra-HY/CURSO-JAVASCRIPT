// o prototype é setado automaticamente na funcoes/ metodos 
// com a utilizacao do class

class Pessoa{
    constructor(nome, sobrenome){ // <-- inicializador def __init__
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    };
    chorar(){
        console.log(`${this.nome} esta chorando`)
    };
    comer(){
        console.log(`${this.nome} esta comendo`)
    };

}

const p1 = new Pessoa('Luiz', 'Pessoa');