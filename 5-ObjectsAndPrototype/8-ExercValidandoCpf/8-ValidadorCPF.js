let input = document.querySelector('.input');


input.addEventListener('keyup', (evento)=>{
    if(isNaN(input.value[input.value.length-1])){
        input.value = input.value.slice(0,input.value.length - 1);
    }
    input.value += (In(input.value.length, [3,7]))? '.':(input.value.length==11)?'-':'';
});




function vefrCPF( Cpfnumero, dig = 0){
    // dig e ponteiro para o proximo digito do cpf/ seguda verificacao

    let soma = 0;
    for (let i = 1; i < 10 ; i++) {
      soma+= Cpfnumero[i-1+dig] * i;
    };

    if (((soma%11==10)? 0:(soma%11)) != Cpfnumero[9+dig]){
        return false;
    };
    if (dig == 1) {
        return true;
    };
    // segunda vef do segundo digito
    return verfCPF(Cpfnumero,1);
};



function In(elemento,object){
    for (let i = 0; i < object.length; i++) {
        if(elemento==object[i]) return true;
    };
    return false;
};  