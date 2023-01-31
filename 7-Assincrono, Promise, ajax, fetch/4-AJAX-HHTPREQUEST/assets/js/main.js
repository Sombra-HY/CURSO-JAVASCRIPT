const request = (obj)=>{

    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load',function (){
        // codigo de pagina http entre 200 e 300 é classificado sucess
        // acima de 300 sao erros... 
        if (xhr.status >=200 && xhr.status <=300){
            obj.success( xhr.responseText); // se nao ocorrer erro pegara todo o elemento
        } else{
            obj.error( xhr.statusText);
            obj.error( xhr.status);
        }
    });
};


// Pega o click na pagina se for em um link, pega o href deste ou seja
// o link e guarda
document.addEventListener('click',function(e){
    const el = e.target; 
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregapagina(el);
    }
});

// com o href manda esses valores para  o request
function carregapagina(el){
    const href = el.getAttribute('href');
    //link

    console.log(href);
    request({
        method: 'GET',
        url: href,
        
        success(response){
            carregaResultado(response);
        },
        error(errortext){
            console.log(errortext);
        }
    })
}

function carregaResultado(resp){
    const resultado = document.querySelector('.conteudo');
    resultado.innerHTML = resp; 
    resultado.iner
}