// O # define que um atributo/ methodo e privado
// pode ser usado antes do constructor 


class Carro{
    #VELOCIDDADE;

    constructor(nome){
        this.nome = nome;
        this.#VELOCIDDADE = 22;
    }

    get velocidade(){
        return this.#VELOCIDDADE;
    }

    set velocidade(valor){
        if(valor < 0 || valor > 100) {this.#VELOCIDDADE = 0};
        if( typeof valor !== 'number') {this.#VELOCIDDADE = 0};

        this.#VELOCIDDADE = valor;
    }

    acelerar(){
        if(this.#VELOCIDDADE >= 100) return; // liite de [_velocidade]
        this.#VELOCIDDADE++;
    }

    freiar(){
        if(this.#VELOCIDDADE<0) return;
        this.#VELOCIDDADE--;
    }
};

let c1 = new Carro('fuscao');
c1.velocidade = 30;
console.log(c1.velocidade);
// console.log(c1.#VELOCIDADE); <-- ERRO