// Immediately invoked function expression (IIFI)

// Sao funcoes que nao tocam os escopo global. 
// Portanto elas nao podem ser chamadas pelo usuarios atraves do Browser... 

(function(){
    
    console.log("opa!!!");
    //fucoes aqui dentro
    
    sla();

    function sla(){
        console.log("sla");
    }
    

})();