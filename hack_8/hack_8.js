/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let log = console.log;
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

let len = arr.length;

for (let i = 1; i < len - 1; i++) {
    let modifiedElement = arr[i].replace("a", "@");
    result.push(modifiedElement);
}

result[result.length - 1] = result[result.length - 1].toUpperCase();
log(result);
//export result
module.exports = result;