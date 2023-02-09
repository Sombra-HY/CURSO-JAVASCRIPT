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