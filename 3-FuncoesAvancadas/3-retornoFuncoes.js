function F1(text){
    function F2(arg){
        console.log(arg+' '+ text);
    }
    return F2;
}
F1('ola')('sim!');
