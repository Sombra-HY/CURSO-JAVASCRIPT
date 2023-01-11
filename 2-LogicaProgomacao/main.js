
// procura primeiro veradadeiro e retorna
// Existe valores que retornam false - nan- undefined - null ...

let corselcionada = null;
let cor = corselcionada || false ||"black"; 

console.log(cor); // --> black

//Ternario
// similar ao C.  (expres)?(valortrue de retorno):(valorfalse de retorno)

// TIPO DE USURARIO--> maior que 100pt == vip, menos que 100pt == club
let usario = 223; 
let tipodeusuario = usario>=100?`VIP, pois tem ${usario} pontos!!!`:`Club,pois tem apenas ${usario} pontos`; 
console.log(tipodeusuario);
