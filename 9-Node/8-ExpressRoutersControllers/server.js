// PADRAO MVC
// O MVC funciona como um padrão de arquitetura de software que melhora a conexão entre 
// as camadas de dados, lógica de negócio e interação com usuário. Através da sua divisão em três
// componentes, o processo de programação se torna algo mais simples e dinâmico.

// ROUTTERS
// em uma aplicacao de grande nivel existe varias rotas, podendo extender o codigo, por isso existe
// o routters :
// basicamente organizando o coidigo...

const routes = require('./routes');
const express = require('./node_modules/express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
});
