
async function Alterahtml(array){   
    for (let i = 0; i < array.length; i++) {

        let frase = document.querySelector(`.${array[i].tag}`);
        frase.innerHTML ="";
        
        for (let x = 0; x < array[i].frase.length; x++) {
            frase.innerHTML+=array[i].frase[x];
            await sleep(100);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

elementos = [
    {tag:'tag1',frase:"OLA MEU CHAPA!!!"},
    {tag:'tag2',frase:"Nao sei o que escrever"},
    {tag:'tag3',frase:"OPA"},
    {tag:'tag4',frase:"!!!"},
]

