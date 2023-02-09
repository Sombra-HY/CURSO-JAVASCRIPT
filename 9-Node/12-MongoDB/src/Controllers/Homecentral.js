const HomeModel = require('../models/HomeModel'); // pega o modelo 

HomeModel.create({
    titulo:'nao sei o que escrever',
    descricao:'mongofb pode ser um pouco duro as vezes'
})
    .then(dados=>console.log(dados))
    .catch(e=>console.log(e));
// cria no banco de dados conforme o esquema passado return (Promises)



exports.PaginaInicial = (req ,resp)=>{
    resp.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
}
exports.Resposta = (req ,resp)=>{
    resp.render('idex');
}