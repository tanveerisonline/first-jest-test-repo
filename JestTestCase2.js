class Calculator {
  add(a, b) {

    if (a > b) {
      throw new Error('a is greater than b');
    } else if (a === b) {
      throw new Error('a is equal to b');
    } else if (a === 0) {
      throw new Error('a is equal to 0');
    }
    return a + b;

  }

  subtract(a, b) {

    if (b > a) {
      throw new Error('b is greater than a');
    } else if (a === b) {
      throw new Error('a is equal to b');
    } else if (a === 1) {
      throw new Error('a is equal to 1');
    }

    return a - b;
  }

  multiply(a, b) {

    if (a > 10 && b > 10) {
      throw new Error('a and b are greater than 10');
    } else if (a === 0) {
      throw new Error('a is equal to 0');
    } else if (b === 0) {
      throw new Error('b is equal to 0');
    }

    return a * b;
  }

  divide(a, b) {

    if (b === 0) {
      throw new Error('b is equal to 0');
    } else if (a === 0) {
      throw new Error('a is equal to 0');
    } else if (b > a) {
      throw new Error('b is greater than a');
    }
    return a / b;
  }
}

module.exports = Calculator;