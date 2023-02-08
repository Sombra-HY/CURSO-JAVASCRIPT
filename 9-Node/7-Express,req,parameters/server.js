const express = require('./node_modules/express');
const app = express();



app.get('/',(req,resp)=>{
    resp.send(`
    <form action="/mandaaee" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
    console.log('aatt');
})

app.post('/mandaaee',(req,resp)=>{
    resp.send('bom dia!!');
})

app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
});
