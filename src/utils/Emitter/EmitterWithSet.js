class EmitterWithSet {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event] || new Set();
    this.listeners[event].add(listener);
  }

  off (event, listener) {
    this.listeners[event].delete(listener);
  }

  emit (event) {
    this.listeners[event].forEach(savedListener => {
      savedListener();
    });
  }
}

export default EmitterWithSet;
