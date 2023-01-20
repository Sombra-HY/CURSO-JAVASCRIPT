// Combinacao
// filtra pares
// dobrar os valores
// reduzir (somar tudo)

const numeros = [22, 89, 56, 22, 2, 1, 56, 12, 445,4,655,233,12,2,0,49,26];


let du = (numeros.filter((valor )=> valor%2===0))
.map((valor)=> valor*2)
.reduce((total,valor)=>total+=valor,0);
console.log(du);