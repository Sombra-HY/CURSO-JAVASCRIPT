exports.PaginaInicial = (req ,resp)=>{
    resp.send(`
    <form action="/" method="GET">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
}
exports.Resposta = (req ,resp)=>{
    resp.send(` OPa meu bom!`);
}