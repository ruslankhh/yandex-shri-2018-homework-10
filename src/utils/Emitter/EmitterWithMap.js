class EmitterWithMap {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event] || new Map();
    this.listeners[event].set(listener, listener);
  }

  off (event, listener) {
    this.listeners[event].delete(listener);
  }

  emit (event) {
    for (let listener of this.listeners[event].values()) {
      listener();
    }
  }
}

export default EmitterWithMap;
