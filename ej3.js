const prompt = require("prompt-sync")();
let string1 = prompt("Introduce el primer string:");
let string2 = prompt("Introduce el segundo string:");
let comparacion = (string1 === string2);
let cantidad = (string1.length === string2.length);
console.log("¿Los strings son iguales?", comparacion);  
console.log("¿Ambos strings tienen la misma longitud?", cantidad);

