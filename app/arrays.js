exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  },

  sum : function(arr) {
    return arr.reduce(function(total, num) {
      return total + num;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function(ele) {
      return ele !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i--, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(count, current) {
      return current === item ? ++count : count;
    }, 0);
  },

  duplicates : function(arr) {
    var numCounts = {};
    var dupedNums = [];

    arr.forEach(function(n) {
      if (numCounts[n]) numCounts[n]++;
      else numCounts[n] = 1;
    });

    for (var num in numCounts) {
      if (numCounts[num] > 1) dupedNums.push(parseInt(num));
    }

    return dupedNums;
  },

  square : function(arr) {
    return arr.map(function(num) {
      return num * num;
    });
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce(function(locs, current, i) {
      if (current === target) locs.push(i);
      return locs;
    }, []);
  }
};
