function Capitalization(str) {
  var temp = str;
  str = str[0].toUpperCase() + str.slice(1);

  if (str[0] !== temp[0].toUpperCase()) {
    throw new Error('Error, the capitalization is not working');
  }

  return str;
}

module.exports = Capitalization;