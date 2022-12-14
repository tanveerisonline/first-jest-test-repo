function stringLength(str) {
  if (str.length < 10 && str.length > 0) {
    return str.length;
  } else {
    return new Error('The string is too long or too short');
  }
}

module.exports = stringLength;
