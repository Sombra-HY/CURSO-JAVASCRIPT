function Pessoa( nome, sobrenome){
    
    const protpessoa =  {
        prototype : {
        
            falar(){
                console.log(`${this.nome} esta falando!`);
            },
    
            comer(){
                console.log(`${this.nome} esta comendo!`);
            },
    
            chorando(){
                console.log(`${this.nome} esta chorando!`);
            }
        }
    };

    return Object.create(
        protpessoa, {
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        }
    );
}

const p1 = Pessoa('Luiz','Otavio');