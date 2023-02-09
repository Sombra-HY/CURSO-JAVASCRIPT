//                     MONGODB
require('dotenv').config()
// nao mostrar a senha do banco aqui

const routes = require('./routes');
const express = require('./node_modules/express');
const app = express();

const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONECSTRING)
    .then(()=>{ 
        console.log('Conectado na base de dados! ');
        app.emit('Pronto');
     })
    .catch(e=>console.log(e)); 
    // Apos ter a conexao no banco de dados que ocorrera o servidor


app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use(express.static('./public')); 


// inciando dps da confirmacao
app.on('Pronto',()=>{
    app.listen(3000,()=>{
        console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
    });    
});
