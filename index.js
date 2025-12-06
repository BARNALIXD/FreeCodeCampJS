function multiplication(a, b) {
    return a * b;
}

console.log(multiplication(4, 5));

function division(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

console.log(division(20, 4));
console.log(division(10, 0));

module.exports = { multiplication, division };  