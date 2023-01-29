const pessoas = [
    {id:3, nome:'Helena'},
    {id:2, nome:'Maria'},
    {id:1, nome:'Jose'}
];

const nePs = {};
for(const {id, nome} of pessoas){
    console.log(id,nome);
    nePs[id] ={id:id,nome:nome}; 
}
console.log(nePs);

const PS = new Map();
for( const object of pessoas){
    const { id } = object;
    PS.set(id, {...object});
}
PS.delete();
console.log(PS);
console.log(PS.values().next());

