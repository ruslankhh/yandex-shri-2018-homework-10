"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmitterSimple = function () {
  function EmitterSimple() {
    _classCallCheck(this, EmitterSimple);

    this.listeners = {};
  }

  _createClass(EmitterSimple, [{
    key: "on",
    value: function on(event, listener) {
      this.listeners[event] = this.listeners[event] ? [].concat(_toConsumableArray(this.listeners[event]), [listener]) : [listener];
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      this.listeners[event] = this.listeners[event].filter(function (savedListener) {
        return savedListener !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this.listeners[event].forEach(function (savedListener) {
        savedListener();
      });
    }
  }]);

  return EmitterSimple;
}();

exports.default = EmitterSimple;
module.exports = exports["default"];