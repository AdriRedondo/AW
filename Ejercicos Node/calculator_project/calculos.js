function suma(a, b) {
    return a + b;
}

function subtract(a, b) {
    return b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    try {
        return a / b;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    suma: suma,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};