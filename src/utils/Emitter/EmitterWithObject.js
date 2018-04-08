// К сожалению другие полифилы не работают
Object.values = (obj) => Object.keys(obj).map(key => obj[key]);

class EmitterWithObject {
  constructor () {
    this.listeners = {};
  }

  on (event, listener) {
    this.listeners[event] = this.listeners[event] || {};
    this.listeners[event][listener] = listener;
  }

  off (event, listener) {
    if (this.listeners[event]) {
      delete this.listeners[event][listener];
    }
  }

  emit (event) {
    if (this.listeners[event]) {
      Object.keys(this.listeners[event]).forEach(key => {
        this.listeners[event][key]();
      });
    }
  }
}

export default EmitterWithObject;
