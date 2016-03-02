exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(name) {
      return str + ', ' + name;
    }
  },

  makeClosures : function(arr, fn) {
    var funcs = arr.map(function(ele) {
      return function() {
        return fn(ele);
      };
    });

    return funcs;
  },

  partial : function(fn, str1, str2) {
    return function(ending) {
      return fn(str1, str2, ending);
    };
  },

  useArguments : function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    return fn.apply(null, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var args2 = Array.prototype.slice.call(arguments);
      var allArgs = args.concat(args2);
      return fn.apply(null, allArgs);
    }
  },

  curryIt : function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn.call(null, a, b, c);
        }
      }
    }
  }
};
