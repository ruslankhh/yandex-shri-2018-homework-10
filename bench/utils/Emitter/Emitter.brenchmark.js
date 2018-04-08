/* global compare, benchmark */
const EmitterSimple = require('./../../../dist/utils/Emitter/EmitterSimple');
const EmitterWithSet = require('./../../../dist/utils/Emitter/EmitterWithSet');

const emitterSimple = new EmitterSimple();
const emitterWithSet = new EmitterWithSet();

compare('EmitterSimple.on vs EmitterWithSet.on', function () {
  benchmark('EmitterSimple.on', function () {
    const eventHandler = () => {};

    emitterSimple.on('event', eventHandler);
  });
  benchmark('EmitterWithSet.on', function () {
    const eventHandler = () => {};

    emitterWithSet.on('event', eventHandler);
  });
});

compare('EmitterSimple.off vs EmitterWithSet.off', function () {
  benchmark('EmitterSimple.off', function () {
    const eventHandler = () => {};

    emitterSimple.on('event', eventHandler);
    emitterSimple.off('event', eventHandler);
  });
  benchmark('EmitterWithSet.off', function () {
    const eventHandler = () => {};

    emitterWithSet.on('event', eventHandler);
    emitterWithSet.off('event', eventHandler);
  });
});

compare('EmitterSimple.emit vs EmitterWithSet.emit', function () {
  benchmark('EmitterSimple.emit', function () {
    const eventHandler = () => {};

    emitterSimple.on('event', eventHandler);
    emitterSimple.emit('event');
  });
  benchmark('EmitterWithSet.emit', function () {
    const eventHandler = () => {};

    emitterWithSet.on('event', eventHandler);
    emitterWithSet.emit('event');
  });
});
