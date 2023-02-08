// VIEWS 

// engine que vai renderizar paginas html

const routes = require('./routes');
const express = require('./node_modules/express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(routes);

// ENGINE
app.set('views','./src/views');
app.set('view engine', 'ejs');


app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000/ rodando na porta 3000!!');
});
