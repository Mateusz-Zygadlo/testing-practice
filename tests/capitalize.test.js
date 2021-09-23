import capitalize from '../scripts/capitalize';

test('first letter toUpperCase', () => {
    expect(capitalize('tESt')).toBe('Test');
});