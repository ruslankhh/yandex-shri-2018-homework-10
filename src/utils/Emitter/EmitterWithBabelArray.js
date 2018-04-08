import 'core-js/fn/array/values';

class EmitterWithArray {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(listener);
  }

  off (event, listener) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event]
        .filter(savedListener => savedListener !== listener);
    }
  }

  emit (event) {
    if (this.listeners[event]) {
      for (let listener of this.listeners[event].values()) {
        listener();
      }
    }
  }
}

export default EmitterWithArray;
