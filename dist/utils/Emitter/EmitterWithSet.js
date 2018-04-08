"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmitterWithSet = function () {
  function EmitterWithSet() {
    _classCallCheck(this, EmitterWithSet);

    this.listeners = {};
  }

  _createClass(EmitterWithSet, [{
    key: "on",
    value: function on(event, listener) {
      this.listeners[event] = this.listeners[event] || new Set();
      this.listeners[event].add(listener);
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      this.listeners[event].delete(listener);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      Array.from(this.listeners[event]).forEach(function (savedListener) {
        savedListener();
      });
    }
  }]);

  return EmitterWithSet;
}();

exports.default = EmitterWithSet;
module.exports = exports["default"];