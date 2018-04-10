'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  return new RegExp(needle, 'ig').test(haystack);
}

function suggestWithRegExp(input, collection) {
  return collection.filter(function (item) {
    return includes(input, item);
  });
}

exports.default = suggestWithRegExp;
module.exports = exports['default'];