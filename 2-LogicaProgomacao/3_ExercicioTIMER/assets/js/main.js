
let documento = document.querySelector('.time');


class Tempo{
    constructor(documento){
        this.tempo = ['00','00','00'];
        this.segundos = 0;
        this.documento = documento;
        this.intervalo;
    }
    iniciar(){
        this.intervalo = setInterval(() => {
            
            // Update time
            this.segundos ++;
            let [hor, min, sec] = this.secondstotime(this.segundos);
            this.documento.textContent = `${hor}:${min}:${sec}`;
        
        }, 1000);
        this.documento.style.color = 'black';
    }
    pausar(){

        // stop
        clearInterval(this.intervalo);
        this.documento.style.color = 'red';
    }
    zerar(){
        this.documento.style.color = 'black';
        this.documento.textContent = 0;
        clearInterval(this.intervalo);

        // Update time
        this.segundos = 0;
        let [hor, min, sec] = this.secondstotime(this.segundos);
        this.documento.textContent = `${hor}:${min}:${sec}`;
    }
    secondstotime(seconds){

        // retorna os segundos ==> ['hora','minuto','segundo']
        // colocando formatacao do '01' '02'...
        return [('00'+parseInt(seconds/3600)).slice(-2),
                ('00'+parseInt((seconds%3600)/60)).slice(-2),
                ('00'+(seconds%3600)%60).slice(-2)]
    }
}

let timer = new Tempo(documento);


