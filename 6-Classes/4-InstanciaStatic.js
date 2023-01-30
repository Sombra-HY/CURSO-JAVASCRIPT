// Metodo estatico vai acessar pela classe ainda nao instaciada
// por isso ele nao tem os valores da instacia o C1 e c2 
// ,,, 

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // metodo de instancia
    aumentarVolume(){
     if(this.volume>=100) return;
     this.volume++;   
    }
    // metodo de instancia
    diminuirVolume(){
     if(this.volume<=0) return;
     this.volume--;   
    }


    //metodo estatico

    static trocapilha(){
        console.log('Pilha trocada! ');
        this.tv = 'x';
        this.tv = 'x';
    }
}
const c1 = new ControleRemoto( 'Sandung');
const c2 = new ControleRemoto('Soby');

c1.aumentarVolume();
c1.aumentarVolume();
c2.aumentarVolume();
c1.aumentarVolume();

console.log(c1.volume);
console.log(c2.volume);

console.log(c2.tv);
console.log(c1.tv);

ControleRemoto.trocapilha();

console.log(c2.tv);
console.log(c1.tv);

