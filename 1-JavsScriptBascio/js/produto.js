// produto para ser usado no carrinho
export function Produto(nome, codigo, valoru){
    let produto = {
        nome, codigo, valoru, _quanti : 1,
        setquanti(quanti){
            this._quanti = quanti;
        }
    }
    return produto;
}
