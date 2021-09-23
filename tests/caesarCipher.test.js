import caesarCipher from '../scripts/caesarCipher';

test('test to caesar', () => {
    expect(caesarCipher('test')).toBe('whvw');
})
test('xentence to caesar', () => {
    expect(caesarCipher('sentence')).toBe('vhqwhqfh');
})
test('winner to caesar', () => {
    expect(caesarCipher('winner')).toBe('zlqqhu');
})
test('what works to caesar', () => {
    expect(caesarCipher('what works')).toBe('zkdw zrunv');
})