const prompt = require("prompt-sync")();
let numero = prompt("Introduce un número:");
numero = Number(numero);
function division5(num) {
    return num % 5 === 0;
}
if (division5(numero)) {
    console.log(`${numero} es divisible por 5.`);
} else {
    console.log(`${numero} no es divisible por 5.`);
}
