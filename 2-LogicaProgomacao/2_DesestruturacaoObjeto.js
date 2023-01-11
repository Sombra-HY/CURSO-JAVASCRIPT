// array propriedade / o resto empacota valores em um array dos itens fatantes
function array(){
    let  a = 1;
    let  b = 2;
    let  c = 3;

    let lista =[primeiro, ...resto]= [a,b,c];
    console.log(resto);
}

// Atrivuicao via desestruturacao
let Pessoa={
    nome:'lucas',
    sobrenome: "sombra",
    idade:19,
    endereco:{
        CEP:'0565-001',
        rua:"rua leves nira",
        numero: 32,
        bairro: 'Jadim Bandeirantes',
        cidade: 'sao paulo',
        Estado: "SP"
    }
};
// é possivel pegar os elementos de umm objeto e atribuilos 
// para novas variaveis, atraves da 
// sintaxe let {elementodesejadao: nomevar} = Objeto


let {nome:n, endereco: { rua: r, numero: x}, elemento : a = 2} = Pessoa;

console.log(n+"\n",r+"\n",x+"\n",a); //<-- variaveis com a chave citada antes no l.30
// se nao existir a chava no obejeto pode criar uma valor padrao