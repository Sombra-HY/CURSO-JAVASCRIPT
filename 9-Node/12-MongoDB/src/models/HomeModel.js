const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
}); // CRIA O TIPO DE ARQUIVO o esquema

const Homemodel = mongoose.model("Home",homeSchema); // cria o molde  que pode ser usado para criar o modelo do tipo homoschema

module.exports = Homemodel; // enviando o modelo que pode ser usado em outros lugares