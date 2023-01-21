// Copiando Objetos
 let O1 = {nome:'lucas',sobrenome: "sombra"};
 let O2 = {...O1};
delete O2.nome;
console.log(O1,O2);

console.log(Object.keys(O1));
console.log(Object.values(O1));

// entries separa em uma lista cada elemento do objeto 
//[[chave,valor], [chave,valor]]

for(let  [chave, valor] of Object.entries(O1)){
    console.log(chave,valor);
}
