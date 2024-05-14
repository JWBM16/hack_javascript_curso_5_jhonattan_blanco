/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let log = console.log;
let result = [];

for(let i =1;i <= 8; i++){
    result.push(i);
}

const ls = result.map((elemento, indice) => {
    if (indice % 2 === 0) {
        return elemento;
    }
}).filter(elemento => elemento !== undefined).reverse();

result =  ([...ls])

log(result);

//export result
module.exports = result;