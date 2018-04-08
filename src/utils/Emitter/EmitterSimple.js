class EmitterSimple {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event]
      ? [
        ...this.listeners[event],
        listener
      ]
      : [listener];
  }

  off (event, listener) {
    this.listeners[event] = this.listeners[event]
      .filter(savedListener => savedListener !== listener);
  }

  emit (event) {
    this.listeners[event].forEach(savedListener => {
      savedListener();
    });
  }
}

export default EmitterSimple;
