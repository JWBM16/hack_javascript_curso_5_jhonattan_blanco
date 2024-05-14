/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */


let log = console.log;
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

for (let i = 0; i < numberArray.length; i++) {
    result.push(numberArray[i]);
}

for (let i = 0; i < stringArray.length; i++) {
    result.push(stringArray[i]);
}

result[0] = 'one';
result[2] = 'three';
result[4] = 'five';
result[5] = 'f00';
result[6] = 'Bar';
result[7] = 'b@z';
result[8] = 'quX';
result[9] = '3ch0';

result.splice(5, 0, 'h@ck');

result.unshift('h@ck');

result.push('h@ck');

log(result);
//export result
module.exports = result;