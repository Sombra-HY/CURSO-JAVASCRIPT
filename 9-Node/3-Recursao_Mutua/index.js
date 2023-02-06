const fs = require('fs').promises;

const path = require('path');


async function readdir( rootdir){
    rootdir = rootdir || path.resolve( __dirname); // caminho rootdir ou atual 
    const files = await fs.readdir(rootdir);
    walk(files, rootdir); 
}

async function walk( files, rootdir){
    for (let p of files){
        const fillepath = await path.resolve(rootdir, p);
        const stats = await fs.stat(fillepath);
        if(/\.git/g.test(fillepath)) continue;

        if(stats.isDirectory()){
            readdir(fillepath);
            continue;
        }
        console.log(fillepath);
    }
    
}

readdir('C:/Users/lsomb/OneDrive/Documentos/CURSOS UDEMY/JAVASCRIPT AVANCED/7-Assincrono, Promise, ajax, fetch/');