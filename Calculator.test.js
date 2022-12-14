const Calculator = require('./JestTestCase2.js');

const math = new Calculator();

describe('my Calculations', () => {

  test('should ADD', () => {
    expect(math.add(1, 2)).toBe(3);
    expect(math.add(2, 3)).toBe(5);
    expect(math.add(3, 4)).toBe(7);
  });

  test('should Subtract', () => {
    expect(math.subtract(2, 1)).toBe(1);
    expect(math.subtract(4, 2)).toBe(2);
    expect(math.subtract(2, 1)).toBe(1);
  });

  test('should Multiply', () => {
    expect(math.multiply(2, 1)).toBe(2);
    expect(math.multiply(4, 2)).toBe(8);
    expect(math.multiply(2, 10)).toBe(20);
  });

  test('should Divide', () => {
    expect(math.divide(2, 1)).toBe(2);
    expect(math.divide(4, 2)).toBe(2);
    expect(math.divide(10, 2)).toBe(5);
  });


});
