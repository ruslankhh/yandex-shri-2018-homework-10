const { describe, it } = require('mocha');
const { expect } = require('chai');

const emitter = require('./../../src/utils/emitter');

describe('emitter', () => {
  it('вызов обработчика при возникновении события', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };

    emitter.on('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);

    emitter.emit('increment');
    expect(result).to.deep.equal(2);
  });

  it('вызов обработчика при возникновении конкретного события', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };
    const decrementHandler = function () {
      result -= 1;
    };

    emitter.on('increment', incrementHandler);
    emitter.on('decrement', decrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);
  });

  it('вызов обработчиков при возникновении нескольких событий', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };
    const decrementHandler = function () {
      result -= 1;
    };

    emitter.on('increment', incrementHandler);
    emitter.on('decrement', decrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);

    emitter.emit('decrement');
    expect(result).to.deep.equal(0);
  });

  it('вызов нескольких обработчиков при возникновении события', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const incrementHandler2 = function () {
      result += 10;
    };

    emitter.on('increment', incrementHandler1);
    emitter.on('increment', incrementHandler2);

    emitter.emit('increment');
    expect(result).to.deep.equal(11);
  });

  it('вызов нескольких обработчиков при возникновении нескольких событий', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const incrementHandler2 = function () {
      result += 10;
    };
    const decrementHandler1 = function () {
      result -= 1;
    };
    const decrementHandler2 = function () {
      result -= 11;
    };

    emitter.on('increment', incrementHandler1);
    emitter.on('increment', incrementHandler2);
    emitter.on('decrement', decrementHandler1);
    emitter.on('decrement', decrementHandler2);

    emitter.emit('increment');
    expect(result).to.deep.equal(11);

    emitter.emit('decrement');
    expect(result).to.deep.equal(0);
  });

  it('отписка обработчика от события', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };

    emitter.on('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);

    emitter.off('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);
  });

  it('отписка конкретного обработчика от события', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const incrementHandler2 = function () {
      result += 11;
    };

    emitter.on('increment', incrementHandler1);
    emitter.on('increment', incrementHandler2);

    emitter.emit('increment');
    expect(result).to.deep.equal(11);

    emitter.off('increment', incrementHandler1);

    emitter.emit('increment');
    expect(result).to.deep.equal(12);
  });

  it('отписка обработчика от конкретного события', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };
    const decrementHandler = function () {
      result -= 1;
    };

    emitter.on('increment', incrementHandler);
    emitter.on('decrement', decrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);

    // Не должно сработать, так как передан обработчик для другого события
    emitter.off('increment', decrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(2);

    // Должен сработать
    emitter.off('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(2);
  });

  it('отписка обработчиков от нескольких событий', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };
    const decrementHandler = function () {
      result -= 1;
    };

    emitter.on('increment', incrementHandler);
    emitter.on('decrement', decrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(1);

    emitter.emit('decrement');
    expect(result).to.deep.equal(0);

    emitter.off('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(0);

    emitter.emit('decrement');
    expect(result).to.deep.equal(-1);

    emitter.off('decrement', decrementHandler);

    emitter.emit('decrement');
    expect(result).to.deep.equal(-1);
  });

  it('отписка нескольких обработчиков от события', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const incrementHandler2 = function () {
      result += 10;
    };

    emitter.on('increment', incrementHandler1);
    emitter.on('increment', incrementHandler2);

    emitter.emit('increment');
    expect(result).to.deep.equal(11);

    emitter.off('increment', incrementHandler1);

    emitter.emit('increment');
    expect(result).to.deep.equal(12);

    emitter.off('increment', incrementHandler2);

    emitter.emit('increment');
    expect(result).to.deep.equal(12);
  });
});
