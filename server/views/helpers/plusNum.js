'use strict';

module.exports = function plusNum(original, add, max) {
    var sum = parseInt(original) + parseInt(add);
    if (sum < 0) {
      sum = 0;
    }
    if (sum > max) {
      sum = max
    }
    return sum;
};
