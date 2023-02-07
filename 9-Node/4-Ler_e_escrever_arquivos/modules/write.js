const fs = require('fs');

module.exports = (caminhoarquivo,json) =>{
    fs.writeFileSync(caminhoarquivo, json, {flag: 'w'});
}