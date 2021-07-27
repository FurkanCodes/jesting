const reverse = require('./reverseStr');

test('reversed', () => {
    expect(reverse("Hi")).toBe('iH');
})