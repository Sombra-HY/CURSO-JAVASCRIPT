
export function Carrinho(){
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