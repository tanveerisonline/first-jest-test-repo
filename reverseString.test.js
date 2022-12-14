const reverseString = require('./JestTestCase1.js');
const greet = 'hello';

test('reverseString function exists', () => {
  expect(reverseString(greet)).toBe(greet.split('').reverse().join(''));
  expect((greet) => reverseString()).toThrow(Error);
});