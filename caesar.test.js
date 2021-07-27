const caesarShift = require('./caesar');

test('Test 1', () => {
    expect(caesarShift('Attack at dawn!', 12)).toBe("Mffmow mf pmiz!");    // Returns "Mffmow mf pmiz!")
})

test('Test 1', () => {
    expect(caesarShift('Furkan', 1)).toBe("Gvslbo");    // Returns "Mffmow mf pmiz!")
})