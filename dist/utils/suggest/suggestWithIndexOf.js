"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function suggestWithIndexOf(input, collection) {
  return collection.filter(function (item) {
    var source = item.toLowerCase();
    var target = input.toLowerCase();

    return source.indexOf(target) !== -1;
  });
}

exports.default = suggestWithIndexOf;
module.exports = exports["default"];