const calculator = require('../scripts/calculator');

test('Add two numbers', () => {
    expect(calculator().addFunction(5, 6)).toBe(11);
})
test('subtract two numbers', () => {
    expect(calculator().subtractFunction(15, 7)).toBe(8);
})
test('multiply two numbers', () => {
    expect(calculator().multiplyFunction(5, 7)).toBe(35);
})
test('divide two numbers', () => {
    expect(calculator().divideFunction(8, 2)).toBe(4);
})