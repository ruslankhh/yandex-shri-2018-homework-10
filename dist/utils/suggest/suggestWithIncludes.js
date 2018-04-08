"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function suggestWithIncludes(input, collection) {
  return collection.filter(function (item) {
    var source = item.toLowerCase();
    var target = input.toLowerCase();

    return source.includes(target);
  });
}

exports.default = suggestWithIncludes;
module.exports = exports["default"];