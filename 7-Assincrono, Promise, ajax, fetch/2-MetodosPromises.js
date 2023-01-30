const e = require("express");

function delay (msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(msg);
            resolve('Promise return --> ' + msg); // msg  enviada para o then
        },tempo)
    })    
}
function rand(min = 1000, max= 3000){
    return Math.floor((Math.random()*( max- min )) + min)
}

// Promise.all Promise .reject Promise.resolve Promise.race

const promises = [
    delay('frase 1', rand()),
    delay('frase 2', rand()),
    delay('frase 3', rand())
];

//                 PROMISE.ALL

// Promise.all faz todas tarefas colocadas em um array e 
// guarda o return em outro array em orden // espera todas acoes para o
// return
//(AS FUNCOES NAO SAO FEITAS EM ORDEN)

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function (error){ // <-- valor enviado pelo reject  do promise
        console.log(error)
    });


//                  PROMISE.RACE

// Execulta todas promessas a que terminar primeiro é retornada, portanto 
// apenas uma promessa sera retornada, (a primeira que chegar ganha!!)
// mas todas serao executadas


Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function (error){ // <-- valor enviado pelo reject  do promise
        console.log(error)
    });

//                  PROMISE.REJECT and PROMISE.RESOLVE

// envia uma promise ja resolvida ou rejeitada, aqui a propmessa ja 
// é enviada pela propria funcao...

function PaginaBaixando(){
    const emcache = true;

    if(emcache){
        return Promise.resolve('pagina em cache')
    }else{
        return delay('carregando...', rand());
    }
}

PaginaBaixando()
    .then((accept)=>{
        console.log(`ACEITO - ${accept}`);
    }).catch((erro)=>{
        console.log(`REJEITADO - ${erro}`);
    })