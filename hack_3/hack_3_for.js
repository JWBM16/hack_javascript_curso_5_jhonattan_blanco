/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];
let log = console.log;

for(let i =5;i >= 1; i--){
    result.push(i);
}

log(result);

//export result
module.exports = result;