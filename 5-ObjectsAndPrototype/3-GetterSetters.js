// GETTER e SETTER


// Com estes é possivel fazer uma funcao se
// comportar como atributo, alem de proteger estes atributos / metodos
// PRIVADO

// GETTER


function Produto( nome, preco, estoque = undefined){
    this.nome = nome;
    this.preco = preco; // <- Publico
    

    Object.defineProperty(this,'estoque', {

        get: function (){
            return estoque;
        },
        
        set: function (valor){
            estoque = valor;
        }
    })




}

let p1 = new Produto('Camisea', 12.30, 3);
console.log(p1.estoque)
p1.estoque = 2;
console.log(p1.estoque)
