// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a euros y luego a yenes
    let valueInYen = valueInDollar / 1.07 * 156.5
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a euros y luego a pound
    let valueInPound = valueInYen / 156.5 * 0.87
    // Retornamos el valor en yenes
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(1000))

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

