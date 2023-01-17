// Contexto: Imagine que as funcoes devem ser executadas 
// em uma determinada orden, isso com um possivel demora de um servidor
// para retornar o resultado das funcoes, por isso, existe o callback
// que coloca uma sequencia para tal acao ser executada apartir de outra...


function rand (min = 1000, max =3000){
    return Math.floor(Math.random()*(max-min)+min);
}

function F1(callback){
    setTimeout(function (){
        console.log("F1!");
        if(callback) callback(); //<-- execultando uma funcao anonima a callback recebida no parametro
    },rand());
}

function F2(callback){
    setTimeout(function (){
        console.log("F2!");
        if(callback) callback(); //<-- execultando uma funcao anonima a callback recebida no parametro
    },rand());
    
}

function F3(callback){
    setTimeout(function (){
        console.log("F3!");
        if(callback) callback(); //<-- execultando uma funcao anonima a callback recebida no parametro
    },rand());
    
}


F1(()=>F2(()=>F3(()=>console.log('Ola mundo!!')))) 

//^-- aqui existe a dependencia de funcoes no caso e enviado na F1 uma funcao anonima
// que chama a F2, no caso no final da F1 sera execultado a funcao anonima (F2), 
// que tambem tem outra funcao anonima dentro desta

// Parametro recebe uma o endereco da funcao e executa ela no final 