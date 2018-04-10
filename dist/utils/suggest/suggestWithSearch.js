"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  return haystack.search(needle) !== -1;
}

function suggestWithIncludes(input, collection) {
  return collection.filter(function (item) {
    return includes(input.toLowerCase(), item.toLowerCase());
  });
}

exports.default = suggestWithIncludes;
module.exports = exports["default"];