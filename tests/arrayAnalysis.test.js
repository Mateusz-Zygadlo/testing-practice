const arrayAnalysis = require('../scripts/arrayAnalysis');

test('first arr', () => {
    expect(arrayAnalysis([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})
test('second arr', () => {
    expect(arrayAnalysis([5, 6, 4, 9, 6])).toStrictEqual({
        average: 6,
        min: 4,
        max: 9,
        length: 5,
    })
})