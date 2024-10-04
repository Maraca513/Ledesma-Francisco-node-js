const prompt = require("prompt-sync")();
let numero1 = parseFloat(prompt("Introduce el primer numero: "));
let numero2 = parseFloat(prompt("Introduce el segundo numero: "));
if (numero1 > numero2) {
    console.log(`El número mayor es: ${numero1}`);
} else if (numero2 > numero1) {
    console.log(`El número mayor es: ${numero2}`);
} else {
    console.log("Ambos números son iguales.");
}