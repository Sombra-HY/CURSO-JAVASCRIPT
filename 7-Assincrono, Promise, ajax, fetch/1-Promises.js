// Promise resolve problemas de callback
// o retorno de algum resultado de um banco de dados que 
// pode ter uma demora de reposta do servidor fazendo
// ter um resultado assincrono esperado o retorno  a b c 
// possivel retorno c a b


// simulando o delay de um servidor
function delay (msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(msg);
            resolve(msg);
        },tempo)
    })
    
}
function rand(min = 1000, max= 3000){
    return Math.floor((Math.random()*( max- min )) + min)
}

delay('frase 1', rand())
.then(()=>{
    return delay('frase 2', rand());
}).then(()=>{
    return delay('frase 3', rand());
})
.catch();


