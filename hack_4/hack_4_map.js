/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];


let log = console.log;

for(let i =1;i <= 8; i++){
    result.push(i);
}

let ls = result.map((elemento, indice) => {
    if (indice % 2 === 1) {
        return indice;
    }
}).filter(elemento => elemento !== undefined);

ls 
result = ([...ls])
log(result);
//export result
module.exports = result;