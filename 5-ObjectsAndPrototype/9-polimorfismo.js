// Polimorfismo 
// - CONTA 
// especializacao CC e CP

// this  vars
// CONTA - proto {sacar, depositar, versaldo}
// CC limite CONTA.proto {* sacar *,depositar,versaldo} subscrito sacar
// CP CONTA.proto {sacar, depositar, versaldo}

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor){
    if(this.saldo<= valor){
        console.log(`saldo Indisponivel - R$ ${this.saldo}`);
        return this.verSaldo();
    };
    this.saldo -= valor; 
    console.log('aa');
};

Conta.prototype.depositar = function (valor){
    this.saldo += valor;
};

Conta.prototype.verSaldo = function (){
    console.log(`Ag/c : ${this.agencia} || Conta CC: ${this.conta}|| R$ ${this.saldo.toFixed(2)}`);
};


function CC (agencia, conta, saldo, limite){
    Conta.call( this, agencia, conta, saldo);

    // call e uma funcao que chama outra aponta um this em um local
    // neste caso, o this ( Ponteiro do CC )
    // que é enviado para o Conta que inicializa o this do CC
    // com os valores  do Conta passados por esses

    this.limite = limite;

    // adicionando valores // 
};

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Limite nao aceito!`);
        return
    };

    this.saldo -= valor; 
    console.log('ab');
};
function CP (agencia, conta, saldo){
    Conta.call( this, agencia, conta, saldo);

    // call e uma funcao que chama outra aponta um this em um local
    // neste caso, o this ( Ponteiro do CC )
    // que é enviado para o Conta que inicializa o this do CC
    // com os valores  do Conta passados por esses

    // adicionando valores // 
};

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


console.log('\nCONTA CORRENTE');

let cc = new CC(0001, '135689-9', 100, 600);
cc.verSaldo();
cc.depositar(300);
cc.verSaldo();
cc.sacar(1000.01);
cc.verSaldo();


console.log('\nCONTA POUPANCA');
let c1 = new CP(0001, '135689-9', 100);
c1.verSaldo();
c1.depositar(300);
c1.verSaldo();
c1.sacar(1000.01);
c1.verSaldo();
















