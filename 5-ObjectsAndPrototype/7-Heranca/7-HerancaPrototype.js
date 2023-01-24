// E-Commerce -- Camiseta -- Caneca
// Abstracao -- Produto
// Cor nome  preco
// material = preco

function Produto (nome, preco, material, Cor){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.Aumenta = function (valorperc){
    this.preco*=(1+valorperc);
};

Produto.prototype.Diminui = function (valorperc){
    this.preco*=(1-valorperc);
};



function Camiseta(nome, preco, Cor, material){
    Produto.call(this,nome,preco);
    this.Cor =Cor;
    this.material = material;  
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;




const P3 = new Camiseta('shorts',60.00, 'Preta', 'Algodao');
P3.Aumenta(0.10);
console.log(P3);