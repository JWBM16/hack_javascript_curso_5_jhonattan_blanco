/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];


let log = console.log;

for(let i =0;i <= 7; i++)
    if(i % 2 == 1) {
    result.push(i);
}

log(result);
//export result
module.exports = result;