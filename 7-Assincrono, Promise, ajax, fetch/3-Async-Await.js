function delay (msg,tempo =rand()){
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


//                               ASYNC AWAIT

async function chamadorsincromo(...fp){
    // chama as funcoes em orden
    try{
        for(let [func,pa] of fp){
        await func(pa);
    }}catch(e){
        console.log(e);
    }
}
execulta([delay,'1'],[delay,'2'],[delay,'3'],[delay,'4']);