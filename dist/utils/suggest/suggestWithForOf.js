'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function suggestWithForOf(input, collection) {
  return collection.filter(function (item) {
    var source = item.toLowerCase();
    var target = input.toLowerCase();
    var result = '';
    var j = 0;

    for (var i = 0; i < source.length; i++) {
      if (source[i] === target[j]) {
        result += source[i];
        j += 1;

        if (result === target) {
          return true;
        }
      } else {
        result = '';
        j = 0;
      }
    }

    return false;
  });
}

exports.default = suggestWithForOf;
module.exports = exports['default'];