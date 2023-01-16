
let input = document.querySelector('.input');
let butao = document.querySelector('.buttontarefa');
let lista = document.querySelector('.lista');

function CriaLi(evento,tipo){
    if (input.value==='' || (tipo===1 && evento.keyCode!==13)) return;

    //adicionando o elemento com o texto do input com primeira letra upper
    CriaElmento(input.value[0].toUpperCase()+ input.value.substring(1));

    //linpando o input
    input.value = '';
    input.focus();
    
}

function CriaElmento(texto){
    // cria elemento li, adiciona texto dentro e coloca na lista no HTML
    let elemento = document.createElement('li');
    let botao = document.createElement('button');
    elemento.innerText = texto + ' ';
    botao.innerText = "X";
    botao.setAttribute("class",'apagar');
    
    lista.appendChild(elemento);
    elemento.appendChild(botao);

    SalvarTarefas(); // memoria atualizada com novo elemento
}

function DeletaTarefa(evento){
    // recebo o evento verifico se o elemento clicado 
    // tem a mesma classe do botao apagar
    // depois acho o pai dele e apago, no caso o LI 
    // o <li> <button> botao apagar </button> <li>

    let elemento = evento.target;
    if(elemento.classList.contains('apagar')){
        console.log(elemento.parentElement);
        elemento.parentElement.remove();

        SalvarTarefas(); //A memoria do navegador sera apagada 
    }
}

function SalvarTarefas(){

    // pego os elementos LI no documento, tranformo eles em uma lista no 
    // listafazeres onde eu adiciono o texto do LI 

    let tarefaslista = lista.querySelectorAll('li');
    let listafazeres = []; 

    for (let tarefa of tarefaslista){
        listafazeres.push(tarefa.innerText.replace('X','').trim());
    }

    // Coloco na memoria do navegador tranformando em 'json string' 

    const tarefasJSON = JSON.stringify(listafazeres);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefasSalvas(){

    let tarefas = localStorage.getItem('tarefas'); // aqui tarefas é o json string
    let listatarefas = JSON.parse(tarefas); // tranformando 'json string em lista'
    console.log(listatarefas,tarefas);

    // Atualiza com a memoria do navegador
    for(let t of listatarefas){
        CriaElmento(t);
    }
}
adicionaTarefasSalvas();

butao.addEventListener('click',function(evento) {CriaLi(evento, 0)});
input.addEventListener('keypress',function (evento) {CriaLi(evento, 1)});
document.addEventListener('click', function(evento){DeletaTarefa(evento)});