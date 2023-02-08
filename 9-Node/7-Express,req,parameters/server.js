// QUERY STRING
// valores pelo url GET

// POST
// para pegar os valores de um form é necessario: (req.body.'exemplo') 
// app.use(
//     express.urlencoded({extended:true})
// )


const express = require('./node_modules/express');
const app = express();



app.get('/',(req,resp)=>{
    resp.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
})
// sem coolocar o '?' fica opcional receber ou nao os valores--> podendo acessar o /teste 
app.get('/teste/:Idusuarios?/:valores?',(req,resp)=>{
    console.log(req.params);
    console.log(req.query); // <-- imprime query strings por exemplo na 
                            //url https:.../teste/?nome=junior&sobrenome=orivaldo
    resp.send(req.query.nome);
})
// POST

// para pegar os dados enviados pelo metodo post é necessario do codigo abaixo:
app.use(
    express.urlencoded({extended:true})
);

app.post('/',(req,resp) => {
    console.log(req.body);
    resp.send(`o que vc me enviou foi ${req.body.nome}`); // nome <-- é o name='name' no form

})



app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
});
