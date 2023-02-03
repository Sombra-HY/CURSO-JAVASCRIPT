// EXPORTANDO
// SO E POSSIVEL IMPORTAR USANDO A tag TYPE = "MODULE" no HTML

function soma( x, y){
    return x+y;
}
function menos( x, y){
    return x-y;
}
function mutiplicacao( x, y){
    return x*y;
}
function divisao( x, y){
    return x/y;
}

export {soma,menos,mutiplicacao,divisao};