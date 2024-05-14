/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let log = console.log;
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let i =0;
let len =arr.length -1;

for(; i<=len; i++){
    result.push(arr[i][0].toUpperCase() + arr[i].substring(1));
}

log(result)
//export result
module.exports = result;