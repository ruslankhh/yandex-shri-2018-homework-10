"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// К сожалению другие полифилы не работают
Object.values = function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

var EmitterWithObject = function () {
  function EmitterWithObject() {
    _classCallCheck(this, EmitterWithObject);

    this.listeners = {};
  }

  _createClass(EmitterWithObject, [{
    key: "on",
    value: function on(event, listener) {
      this.listeners[event] = this.listeners[event] || {};
      this.listeners[event][listener] = listener;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (this.listeners[event]) {
        delete this.listeners[event][listener];
      }
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this = this;

      if (this.listeners[event]) {
        Object.keys(this.listeners[event]).forEach(function (key) {
          _this.listeners[event][key]();
        });
      }
    }
  }]);

  return EmitterWithObject;
}();

exports.default = EmitterWithObject;
module.exports = exports["default"];