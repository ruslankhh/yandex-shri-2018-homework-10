'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  return new RegExp(needle, 'ig').test(haystack);
}

function suggestWithRegExp(input, collection) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  var result = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (includes(input, item)) {
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

exports.default = suggestWithRegExp;
module.exports = exports['default'];