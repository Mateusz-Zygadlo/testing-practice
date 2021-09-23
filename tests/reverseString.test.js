const reverseString = require('../scripts/reverseString');

test('reverse string', () => {
    expect(reverseString('sentence')).toBe('ecnetnes');
})