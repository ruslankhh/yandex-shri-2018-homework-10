const { describe, it } = require('mocha');
const { expect } = require('chai');

const EmitterWithArray = require('./../../../src/utils/Emitter/EmitterWithArray');

const emitter = new EmitterWithArray();

describe('EmitterWithArray', () => {
  it('вызов обработчика при возникновении события', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };

    emitter.on('increment', incrementHandler);

    const expected1 = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    const expected2 = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);
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

    const expected = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected);
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

    const expected1 = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    const expected2 = result - 1;

    emitter.emit('decrement');
    expect(result).to.deep.equal(expected2);
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

    const expected = result + 1 + 10;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected);
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
      result -= 10;
    };

    emitter.on('increment', incrementHandler1);
    emitter.on('increment', incrementHandler2);
    emitter.on('decrement', decrementHandler1);
    emitter.on('decrement', decrementHandler2);

    const expected1 = result + 1 + 10;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    const expected2 = result - 1 - 10;

    emitter.emit('decrement');
    expect(result).to.deep.equal(expected2);
  });

  it('вызов обработчиков должен происходить в том порядке, в котором их подписали', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const multiplicationHandler1 = function () {
      result *= 2;
    };
    const incrementHandler2 = function () {
      result += 10;
    };
    const multiplicationHandler2 = function () {
      result *= 20;
    };

    emitter.on('calc', incrementHandler1);
    emitter.on('calc', multiplicationHandler1);
    emitter.on('calc', incrementHandler2);
    emitter.on('calc', multiplicationHandler2);

    const expected = ((result + 1) * 2 + 10) * 20;

    emitter.emit('calc');
    expect(result).to.deep.equal(expected);
  });

  it('отписка обработчика от события', () => {
    let result = 0;

    const incrementHandler = function () {
      result += 1;
    };

    emitter.on('increment', incrementHandler);

    const expected = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected);

    emitter.off('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(expected);
  });

  it('отписка конкретного обработчика от события', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const incrementHandler2 = function () {
      result += 10;
    };

    emitter.on('increment', incrementHandler1);
    emitter.on('increment', incrementHandler2);

    const expected1 = result + 1 + 10;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    emitter.off('increment', incrementHandler1);

    const expected2 = result + 10;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);
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

    const expected1 = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    // Не должно сработать, так как передан обработчик для другого события
    emitter.off('increment', decrementHandler);

    const expected2 = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);

    // Должен сработать
    emitter.off('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);
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

    const expected1 = result + 1;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    const expected2 = result - 1;

    emitter.emit('decrement');
    expect(result).to.deep.equal(expected2);

    emitter.off('increment', incrementHandler);

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);

    const expected3 = result - 1;

    emitter.emit('decrement');
    expect(result).to.deep.equal(expected3);

    emitter.off('decrement', decrementHandler);

    emitter.emit('decrement');
    expect(result).to.deep.equal(expected3);
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

    const expected1 = result + 1 + 10;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected1);

    emitter.off('increment', incrementHandler1);

    const expected2 = result + 10;

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);

    emitter.off('increment', incrementHandler2);

    emitter.emit('increment');
    expect(result).to.deep.equal(expected2);
  });

  it('отписка обработчиков должна сохранять порядок оставшихся обработчиков', () => {
    let result = 0;

    const incrementHandler1 = function () {
      result += 1;
    };
    const multiplicationHandler1 = function () {
      result *= 2;
    };
    const incrementHandler2 = function () {
      result += 10;
    };
    const multiplicationHandler2 = function () {
      result *= 20;
    };

    emitter.on('calc', incrementHandler1);
    emitter.on('calc', multiplicationHandler1);
    emitter.on('calc', incrementHandler2);
    emitter.on('calc', multiplicationHandler2);

    const expected1 = ((result + 1) * 2 + 10) * 20;

    emitter.emit('calc');
    expect(result).to.deep.equal(expected1);

    emitter.off('calc', multiplicationHandler1);

    const expected2 = (result + 1 + 10) * 20;

    emitter.emit('calc');
    expect(result).to.deep.equal(expected2);

    emitter.off('calc', incrementHandler1);

    const expected3 = (result + 10) * 20;

    emitter.emit('calc');
    expect(result).to.deep.equal(expected3);
  });
});
