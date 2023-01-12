let lista = ['lucas','jose','maria','juliana'];

let objeto = {
    nome:'lucas',
    sobrenome:'sombra',
    idade:19
}
// retorna o indice de um objeto ou lista...
for (let i in lista){
    console.log(`item ${i}: ${lista[i]}`);
}
for (let i in objeto){
    console.log(`item ${i} do objeto: ${objeto[i]}`);
}
// apenas para interaveis 
for (let i of lista){
    console.log(i);
}
for (let i of lista[0]){
    console.log(i);
}
