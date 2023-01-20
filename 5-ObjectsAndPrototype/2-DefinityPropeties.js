// define properties 

// Contexto: imagine que vc quer que um propiedade, nao seja alterada
// ou ate mesmo o proprio objeto...



function Produto( nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this,'estoque',{
        enumerable: true, // mostra a chave (Veja no console.log(p1))
        value: estoque, // valor
        writable: false, // alterar ou nao o valor
        configurable: true // chave configuravel ou nao pode ser apagada
        })
    



    // Definindo propiedades para varias propriedades
    Object.defineProperties(this,{
        nome: {
            enumerable: true, // mostra a chave (Veja no console.log(p1))
            value: estoque, // valor
            writable: false, // alterar ou nao o valor
            configurable: true // chave configuravel ou nao pode ser apagada
        },
        preco: {
            enumerable: true, // mostra a chave (Veja no console.log(p1))
            value: estoque, // valor
            writable: false, // alterar ou nao o valor
            configurable: true // chave configuravel ou nao pode ser apagada
        }

    })
}

let p1 = new Produto("Camiseta Ultra", 69.99, 30);
p1.estoque = 2;
delete p1.estoque;
console.log(p1);
