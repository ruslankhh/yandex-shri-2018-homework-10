"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  return haystack.indexOf(needle) !== -1;
}

function suggestWithIndexOf(input, collection) {
  return collection.filter(function (item) {
    return includes(input.toLowerCase(), item.toLowerCase());
  });
}

exports.default = suggestWithIndexOf;
module.exports = exports["default"];