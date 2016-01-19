exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var count = 1;
    var letters = str.split('').reduce(function(word, ch) {
      if (ch !== word[word.length - 1]) {
        // append letter, start new count
        word += ch;
        count = 1;
      } else if (count < amount) {
        // apend letter, increment count
        word += ch;
        count++;
      } // otherwise ignore
      return word;
    });
    return letters;
  },
  // TODO: super naive, find the more elegant solution that must exist
  wordWrap: function(str, cols) {
    var count = 0;
    var words = str.split(' ');

    return words.reduce(function(formatted, word, index) {
      var len = word.length;

      if (count === 0) {
        // at beginning of newline
        formatted += word;
        count += len;
      } else if (count > 0 && count < cols) {
        // if word fits on line
        if (count + len + 1 <= cols) {
          formatted += ' ' + word;
          count += len + 1;
        } else { // if word doesn't fit on line
          formatted += '\n' + word;
          count += len;          
        }
      }

      if (count >= cols && index !== words.length - 1) {
        // go to newline and reset count
        formatted += '\n';
        count = 0;
      }

      return formatted;
    }, '');

    // remove last newline and return
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
