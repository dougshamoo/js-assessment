exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var props = Object.getOwnPropertyNames(obj);

    return props.reduce(function(result, prop) {
      result.push(prop + ': ' + obj[prop]);
      return result;
    }, []);
  }
};
