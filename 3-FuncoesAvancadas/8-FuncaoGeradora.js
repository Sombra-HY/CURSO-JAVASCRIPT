// uma funcao geradora pode retornar 
//todos os valores em orden sequencial o yield 
// e o parametro para o retorno sequencial
// o retorno de uma funcao geradora e iteravel 
// o uso do return em funcao geradora faz ela parar 
// similar ao break em while ou for 


// BENEFICIO: EFICIENCIA e ORDEN SEQUENCIAL
function* Geradora1(){
    // codigo
    yield 'valor1'

    // codigo
    yield 'valor2'
    
    // codigo
    yield 'valor3'
    
    // codigo
    yield 'valor4'
}
let gerador = Geradora1(); // Gerador aqui

for (let i of gerador){
    console.log(i);
}

