class EmitterWithSet {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event] || new Set();
    this.listeners[event].add(listener);
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

export default EmitterWithSet;
