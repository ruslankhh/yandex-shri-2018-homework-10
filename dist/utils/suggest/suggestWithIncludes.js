"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function includes(needle, haystack) {
  return haystack.includes(needle);
}

function suggestWithIncludes(input, collection) {
  return collection.filter(function (item) {
    return includes(input.toLowerCase(), item.toLowerCase());
  });
}

exports.default = suggestWithIncludes;
module.exports = exports["default"];