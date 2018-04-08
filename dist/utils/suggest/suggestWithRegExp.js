'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function suggestWithRegExp(input, collection) {
  return collection.filter(function (item) {
    var source = item;
    var target = new RegExp(input, 'ig');

    return target.test(source);
  });
}

exports.default = suggestWithRegExp;
module.exports = exports['default'];