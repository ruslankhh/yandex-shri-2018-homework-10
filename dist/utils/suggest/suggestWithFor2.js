'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  var middle = haystack.length % 2 !== 0 ? haystack[(haystack.length - 1) / 2] : '';
  var result1 = '';
  var result2 = '';
  var i1 = 0;
  var i2 = haystack.length - 1;
  var j1 = 0;
  var j2 = needle.length - 1;

  for (; i1 <= (haystack.length - 1) / 2;) {
    if (haystack[i1] === needle[j1]) {
      result1 += haystack[i1];
      j1 += 1;

      if (result1 === needle) {
        return true;
      }
    } else {
      result1 = '';
      j1 = 0;
    }

    if (haystack[i2] === needle[j2]) {
      result2 = haystack[i2] + result2;
      j2 -= 1;

      if (result2 === needle) {
        return true;
      }
    } else {
      result2 = '';
      j2 = needle.length - 1;
    }

    i1 += 1;
    i2 -= 1;
  }

  return result1 + middle + result2 === needle;
}

function suggestWithForOf2(input, collection) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  var result = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (includes(input.toLowerCase(), item.toLowerCase())) {
        result.push(item);

        if (result.length === limit) {
          return result;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

exports.default = suggestWithForOf2;
module.exports = exports['default'];