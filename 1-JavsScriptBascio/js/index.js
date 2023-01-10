
// IDEIA: Carrinho de compras com POO, onde a o carrinho é 
// independendte do produto, no caso o produto sera adicionado no carrinho
// e depois sera mostrado o valor/ total do valor...


function Carrinho(){
    let __carrinho = {
        _cesta : [],
        totaldacompra(){
            if (this._cesta.length == 0){
                return 'Nao existe produtos na lista!!!';
            }
            else{
                let soma = 0;
                for(let i =0; i<(this._cesta.length); i++){
                    soma+=this._cesta[i].valoru * this._cesta[i]._quanti
                }
                return `O total da compra é ${soma}`;
            }
        },
        pushcesta(produto){
            this._cesta.push(produto);
        },
        mostrarcesta(){
            let msg = '';
            for(let i = 0;i<(this._cesta.length);i++){
                msg+=`${this._cesta[i].nome} \n`;
            }
            return msg;
        },
        _mensagem(msg ,erro = 0){
            if(erro){
                console.log(`erro: ${msg}`);
                return ;
            }
            console.log(`${msg}`);
        }   
    }
    return __carrinho;
}

// produto para ser usado no carrinho
function Produto(nome, codigo, valoru){
    let produto = {
        nome, codigo, valoru, _quanti : 1,
        setquanti(quanti){
            this._quanti = quanti;
        }
    }
    return produto;
}


function meuEscopo () {
    let cliente = Carrinho()

    const form = document.querySelector('.form');
    const resut = document.querySelector('#cesta');
    const a = document.querySelector('#valor');

    function recebeEventoForm (evento) {
        evento.preventDefault();
  
        const nome = form.querySelector('.name').value;
        const codi = form.querySelector('.codigo').value;
        const prec = form.querySelector('.preco').value;

        //adiocnando o produto no carrinho
        cliente.pushcesta(Produto(nome, codi, prec));

        //atualizando a cesta no html (LISTA DE COMPRAS)
        resut.innerHTML = cliente.mostrarcesta();

        //atualizacao do total da compra
        a.innerHTML = cliente.totaldacompra();

    }
  
    form.addEventListener('submit', recebeEventoForm);
  }
meuEscopo();
