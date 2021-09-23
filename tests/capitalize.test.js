const capitalize = require('../scripts/capitalize');

test('first letter toUpperCase', () => {
    expect(capitalize('tESt')).toBe('Test');
});