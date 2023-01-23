// new Object <-- Prototype
const ObjA = {
    A:'valueA'
    // prototype 
};
const ObjB = {
    B:'valueB'
    // prototype 
};
//                                                _______B________
Object.setPrototypeOf(ObjB,ObjA); //----------->  |    ____      |
// ObjA é proto do objB                           |    |A_|      |
// O B se conecta ao A, se nao tiver no B         |              |
//                                                |______________|
//-------------------------------------------------------------------------------

function Produto(nome, preco){
    this.nome = nome;
    this.preco= preco;

    Produto.prototype.desconto = function (desconto){
        // desconto de sobre valor base em %
        this.preco = (this.preco * (1 - (desconto/100))).toFixed(2);
    }

    Produto.prototype.aumenta = function (desconto){
        // desconto de sobre valor base em %
        this.preco = (this.preco * (1 + (desconto/100))).toFixed(2);
    }
}

const P1 = new Produto("Camiseta G",89.99);
const P2 = new Produto("Shorts Jeans",45.50);


// Literal
const prod = {
    nome: 'camiseta',
    preco: 23.44
};
// Link para os metodos do Produto 
Object.setPrototypeOf(prod, Produto.prototype);

prod.aumenta(10);

console.log(prod) //25.78


const p3 =Object.create(Produto.prototype);
p3.nome = 'Pulseira';
p3.preco = 20;

p3.aumenta(30);
console.log(p3) //26

