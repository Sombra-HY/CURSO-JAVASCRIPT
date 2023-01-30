class DispostivoEletronico{
    #POWER;

    constructor(nome){
        this.nome = nome;
        this.#POWER = false;
    }
    get power(){
        return this.#POWER;
    }

    chavePower(){
        this.#POWER = (this.#POWER)? false: true; //interruptor
        return `${this.nome}` + ((this.#POWER)?' ligou!':' desligou!');
    }
}

class Smartphone extends DispostivoEletronico{
    constructor(nome, cor , modelo){
        super(nome); // <-- manda e torna o objeto com os parametros passados
        this.cor = cor; 
        this.modelo = modelo;
    }
}

let S1 = new Smartphone('S10', 'Preto', 'Sansung Galaxy S10 ');
console.log(S1.chavePower());

