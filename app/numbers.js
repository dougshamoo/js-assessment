exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binString = num.toString(2);

    return parseInt(binString[binString.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binString = num.toString(2);

    while (binString.length < 8) {
      binString = '0' + binString;
    }

    return binString;
  },

  multiply: function(a, b) {
    return a * b;
  }
};
