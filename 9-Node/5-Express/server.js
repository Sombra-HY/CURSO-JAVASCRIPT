const express = require('./node_modules/express');
const app = express();

// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// Cliente faz uma requisao e o servidor da uma resposta

app.get('/',(requisao, resposta) => {
    resposta.send('Opa meu bom !');
})

app.get('/mandaaee',(req,resp)=>{
    resp.send(`
    <form action="/mandaaee" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
})

app.post('/mandaaee',(req,resp)=>{
    resp.send('bom dia!!');
})

app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
});
