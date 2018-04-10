'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  var result = '';
  var j = 0;

  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      result += haystack[i];
      j += 1;

      if (result === needle) {
        return true;
      }
    } else {
      result = '';
      j = 0;
    }
  }

  return false;
}

function suggestWithForOf(input, collection) {
  return collection.filter(function (item) {
    return includes(input.toLowerCase(), item.toLowerCase());
  });
}

exports.default = suggestWithForOf;
module.exports = exports['default'];