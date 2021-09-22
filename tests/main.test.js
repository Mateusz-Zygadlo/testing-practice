const capitalize = require('../scripts/main');

test('adds 1 + 2 to equal 3', () => {
    expect(capitalize(1, 2)).toBe(3);
});