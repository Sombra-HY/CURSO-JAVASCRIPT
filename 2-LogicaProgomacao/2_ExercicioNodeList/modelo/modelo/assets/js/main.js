
function mudacor(){
    let parag = document.querySelector(".container");
    let elementos = document.querySelectorAll('p');

    let Stylebody = getComputedStyle(document.body);
    let cor = Stylebody.backgroundColor;

    for(let p of elementos){
        p.style.backgroundColor = cor;
        p.style.color = '#FFFFFF'
    }
}