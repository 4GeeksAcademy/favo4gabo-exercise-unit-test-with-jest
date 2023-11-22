const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
})

// test euro to dollar
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// test dollar to yen
test("One dollar should be 146.26168224299064 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(4.8);

    // Si 1 dollar es 146.26168224299064 yenes, entonces 4.8 dolares debe ser (4.8 * 146.26168224299064)
    const expected = 4.8 * 1.07;

    expect(fromDollarToYen(4.8)).toBe(702.0560747663551); 
})

// test yen to pound
test("One yen should be 0.0055591054313099035 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(1000);

    // Si 1 yen son 0.0055591054313099035 pound, entonces 1000 yenes debe ser (1000 * 0.0055591054313099035)
    const expected = 1000 * 0.0055591054313099035;

    expect(fromYenToPound(1000)).toBe(5.559105431309905); 
})