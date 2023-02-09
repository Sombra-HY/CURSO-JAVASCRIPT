//                     Arquivos Estaticos

const routes = require('./routes');
const express = require('./node_modules/express');
const app = express();

// modulos e ROTAS 
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// ENGINE
app.set('views','./src/views');
app.set('view engine', 'ejs');

// Conteudo Estaticos
app.use(express.static('./public')); // <== isto define um conteudo que pode ser acessado pelo servidor 
// onde o caminho esta na apsta public

app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
});
