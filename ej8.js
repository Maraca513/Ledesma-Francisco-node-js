const prompt = require("prompt-sync")();
let año = parseInt(prompt("Ingresa un año:"));
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
if (esBisiesto(año)) {
    console.log("El año ingresado es bisiesto");
} else {
    console.log("El año ingresado no es bisiesto");
}
