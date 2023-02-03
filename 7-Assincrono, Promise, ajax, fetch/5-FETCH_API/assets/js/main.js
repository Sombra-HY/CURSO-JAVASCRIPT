let filtros = document.querySelector('.filtro');

fetch('pessoas.json')
    .then(resposa => resposa.json())
    .then(json =>{
        let lista = new Valores(criaFiltroCaixa(json));
        PegaFiltro(json,lista);
    }); // json

function criaFiltroCaixa(json){
    let lista = {};
    for(let atributos in json[0]){
        lista[atributos] = false;

        let input = document.createElement('input');
        input.type = 'checkbox';
        input.innerHTML = atributos;
        input.id = atributos

        let label = document.createElement('label');
        label.appendChild(input);
        label.innerHTML += atributos;
        
        filtros.appendChild(label);
    }
    return lista;

};

function carregaElementos(json){
    const table = document.createElement('table');

    for (let pessoas of json){
        let tr = document.createElement('tr');
        for(let atributo in pessoas){
            let td = document.createElement('td');
            td.innerText = pessoas[atributo];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    const doc = document.querySelector('.conteudo');
    doc.appendChild(table);


}

function PegaFiltro(json, lista){
    let input = document.querySelector('.filtro');
    
    input.addEventListener('click',function (e){
        
        let el = e.target;
        if (el.tagName==='LABEL') return;
        // lista.filter[el.innerText] = lista.filter[el.innerText]?false:true;
        lista.alteravalor(el.innerText);
        console.log(lista.filter);
        console.log(lista.jsonre(json)); 
    });

    
}


class Valores{
    constructor(lista){
        this.filter = lista; //json atributo true / false
    }
    jsonre(json){
        let txt = json;
        let newlist = [];

        for(let obj of txt){ // obj
            for(let i in obj){ // atributo
                if(!this.filter[i]) delete obj[i]; //false apaga o valor
            }
            newlist.push(obj);
        }

        return newlist;
    }
    alteravalor(valor){
        this.filter[valor] = (this.filter[valor])?false:true;
        console.log((this.filter[valor])?false:true);
    }
}

















