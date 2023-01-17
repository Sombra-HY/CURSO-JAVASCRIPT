// Caso uma funcao nao tenha parametros na funcao 
// pode ser utilizado o arguments que guarda em um objeto 
// todos argumentos enviados para funcao == o * arqguments do python


// funtion nome(parametro){}
// nome(argumento)

function soma(){
    console.log(arguments);
    
    let soma = 0;
    for(let valor of arguments){
        soma += valor;
    }
    console.log(soma);
}

//soma(1,2,3,4,5,6,7,8);



// É possivel compactar parametros com os ... 
function soma1( name,...resto){
    let soma = 0;
    for ( let i of resto) {soma+=i};
    console.log(`ola ${name} voce tem R$ ${soma}`);
}

//soma1('Lucas',20,30,496,456,2,0.23,1.89);