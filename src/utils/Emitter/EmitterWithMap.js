class EmitterWithMap {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event] || new Map();
    this.listeners[event].set(listener, listener);
  }

  off (event, listener) {
    if (this.listeners[event]) {
      this.listeners[event].delete(listener);
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

export default EmitterWithMap;
