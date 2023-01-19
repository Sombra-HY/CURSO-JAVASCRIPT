function Calculadora(){
    return {
        display:document.querySelector('.display'),
        btnClear:document.querySelector('.del'),


        inicia(){
            this.botaoclick();
        },

        botaoclick(){
            document.addEventListener('click',evento =>{
                const el = evento.target; // o bottao
                
                if(el.classList.contains('num')||el.classList.contains('ope')){
                    this.inseredisplay((el.innerText==='X')?'*':el.innerText);
                }
                else if(el.classList.contains('del')){
                    this.deldisplay(el.innerText);
                }
                else if(el.classList.contains('igual')){
                    this.Resultado();
                }
            });
        },

        inseredisplay(valor){
            this.display.value+=valor;
        },

        deldisplay(){
            this.display.value=this.display.value.slice(0,-1);
        },

        Resultado(){
            const valores = eval(this.display.value); //PROBLEMA DE SEGURANCA USAR O EVAl
            this.display.value =valores; 
        }
        


    };
}






let c = Calculadora();
c.inicia();