'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function suggestWithForOf2(input, collection) {
  return collection.filter(function (item) {
    var source = item.toLowerCase();
    var target = input.toLowerCase();
    var middle = source.length % 2 === 0 ? '' : source[(source.length - 1) / 2];
    var result1 = '';
    var result2 = '';
    var i1 = 0;
    var i2 = source.length - 1;
    var j1 = 0;
    var j2 = target.length - 1;

    for (; i1 <= (source.length - 1) / 2;) {
      if (source[i1] === target[j1]) {
        result1 += source[i1];
        j1 += 1;

        if (result1 === target) {
          return true;
        }
      } else {
        result1 = '';
        j1 = 0;
      }

      if (source[i2] === target[j2]) {
        result2 = source[i2] + result2;
        j2 -= 1;

        if (result2 === target) {
          return true;
        }
      } else {
        result2 = '';
        j2 = target.length - 1;
      }

      i1 += 1;
      i2 -= 1;
    }

    return result1 + middle + result2 === target;
  });
}

exports.default = suggestWithForOf2;
module.exports = exports['default'];