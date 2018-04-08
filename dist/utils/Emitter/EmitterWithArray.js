"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmitterWithArray = function () {
  function EmitterWithArray() {
    _classCallCheck(this, EmitterWithArray);

    this.listeners = {};
  }

  _createClass(EmitterWithArray, [{
    key: "on",
    value: function on(event, listener) {
      this.listeners[event] = this.listeners[event] || [];
      this.listeners[event].push(listener);
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (this.listeners[event]) {
        this.listeners[event] = this.listeners[event].filter(function (savedListener) {
          return savedListener !== listener;
        });
      }
    }
  }, {
    key: "emit",
    value: function emit(event) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(function (savedListener) {
          savedListener();
        });
      }
    }
  }]);

  return EmitterWithArray;
}();

exports.default = EmitterWithArray;
module.exports = exports["default"];