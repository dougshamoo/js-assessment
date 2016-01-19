exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    // should count from start number to end number, one per 1/10 second
    var num = start;
    console.log(num);
    var timerId = setInterval(function() {
      if (++num > end) clearInterval(timerId);
      else console.log(num);
    }, 100);
    return {
      cancel: function() {
        clearInterval(timerId);
      },
    };
  }
};
