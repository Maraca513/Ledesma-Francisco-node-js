const prompt = require("prompt-sync")();
let fahrenheit = prompt("Introduce la temperatura en grados Fahrenheit:");
fahrenheit = Number(fahrenheit);
function convertir(f) {
    return (f - 32) * 5 / 9;
}
let celsius = convertir(fahrenheit);
console.log(`${fahrenheit} grados Fahrenheit son ${celsius.toFixed(2)} grados Celsius.`);
