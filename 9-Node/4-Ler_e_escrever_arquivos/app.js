const path = require('path');
const write = require('./modules/write');
const read = require('./modules/read');

const caminhoarquivo = path.resolve(__dirname,'..','teste.json');

const pessoas = [
    {nome : 'lucas' },
    {nome : 'ronaldo' },
    {nome : 'jose' },
    {nome : 'maria' },
];
const json = JSON.stringify(pessoas, '', 2);

write(caminhoarquivo, json);
read(caminhoarquivo);
    
