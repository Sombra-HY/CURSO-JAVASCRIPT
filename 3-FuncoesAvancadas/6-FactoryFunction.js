// Factory function é similar a classes
// o get pega um elemento que na verdade e uma funcao 
// o set faz com que o elemento se compormote como um atributo 

function Pessoa(nome,sobrenome,idade,peso,altura){
    return {
        nome,
        sobrenome,
        idade,
        peso,
        altura,

        fala(assunto= 'nada' ){
            return `${this.nome} esta falando sobre ${assunto}`
        },

        // getter
        get imc(){
            return ((this.peso/(this.altura**2)).toFixed(2));
        },

        //getter
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomecompleto(nomecompleto){
            [this.nome,...this.sobrenome]= nomecompleto.split(" ")
            this.sobrenome = this.sobrenome.toString().replace(',',' ')
        }
    }
};


let p1 = Pessoa('Lucas',"Sombra",19,75,1.80);
console.log(p1.fala("coisas"));
console.log(p1.imc)
p1.nomecompleto = "Jose miranda";
console.log(p1.nome);
console.log(p1.sobrenome);