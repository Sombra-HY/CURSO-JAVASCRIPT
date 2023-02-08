const express = require('./node_modules/express');
const routes = express.Router();

const HomeController = require('./Controllers/Homecentral')
const ContatoController = require('./Controllers/Contato')

// Rotas de Home
routes.get('/', HomeController.PaginaInicial);
routes.post('/', HomeController.Resposta);

// Rotas de Contato
routes.get('/contato',ContatoController.PaginaInicial);


module.exports = routes;