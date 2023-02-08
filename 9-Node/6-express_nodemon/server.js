// NODEMON 

// o servidor e atualizado periodicamente ao atualizar a pagina
// sem ser necessario desligar e ligar o servidor...

// é uma dependencia de desenvolvimento, pois ela so e necessaria no nosso computador para o desenvolvimento 
// do app// site...

// é possivel rodar atraves do npx nodemon server.js <-- arquivo

const express = require('./node_modules/express');
const app = express();

app.get('/',(requisao, resposta) => {
    resposta.send('Opa aaa !');
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
