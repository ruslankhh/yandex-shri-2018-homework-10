/* global compare, benchmark */
const EmitterWithArray = require('./../../../dist/utils/Emitter/EmitterWithArray');
const EmitterWithBabelArray = require('./../../../dist/utils/Emitter/EmitterWithBabelArray');
const EmitterWithMap = require('./../../../dist/utils/Emitter/EmitterWithMap');
const EmitterWithSet = require('./../../../dist/utils/Emitter/EmitterWithSet');

compare('Emitter.on', function () {
  const emitterWithArray = new EmitterWithArray();
  const emitterWithBabelArray = new EmitterWithBabelArray();
  const emitterWithMap = new EmitterWithMap();
  const emitterWithSet = new EmitterWithSet();
  const eventHandler = () => {};

  benchmark('EmitterWithArray.on', function () {
    emitterWithArray.on('event', eventHandler);
  });
  benchmark('EmitterWithBabelArray.on', function () {
    emitterWithBabelArray.on('event', eventHandler);
  });
  benchmark('EmitterWithMap.on', function () {
    emitterWithMap.on('event', eventHandler);
  });
  benchmark('EmitterWithSet.on', function () {
    emitterWithSet.on('event', eventHandler);
  });
});

compare('Emitter.emit', function () {
  const emitterWithArray = new EmitterWithArray();
  const emitterWithBabelArray = new EmitterWithBabelArray();
  const emitterWithMap = new EmitterWithMap();
  const emitterWithSet = new EmitterWithSet();
  const eventHandler = () => {};

  emitterWithArray.on('event', eventHandler);
  emitterWithBabelArray.on('event', eventHandler);
  emitterWithMap.on('event', eventHandler);
  emitterWithSet.on('event', eventHandler);

  benchmark('EmitterWithArray.emit', function () {
    emitterWithArray.emit('event');
  });
  benchmark('EmitterWithBabelArray.emit', function () {
    emitterWithBabelArray.emit('event');
  });
  benchmark('EmitterWithMap.emit', function () {
    emitterWithMap.emit('event');
  });
  benchmark('EmitterWithSet.emit', function () {
    emitterWithSet.emit('event');
  });
});

compare('Emitter.off', function () {
  const emitterWithArray = new EmitterWithArray();
  const emitterWithBabelArray = new EmitterWithBabelArray();
  const emitterWithMap = new EmitterWithMap();
  const emitterWithSet = new EmitterWithSet();
  const eventHandler = () => {};

  emitterWithArray.on('event', eventHandler);
  emitterWithBabelArray.on('event', eventHandler);
  emitterWithMap.on('event', eventHandler);
  emitterWithSet.on('event', eventHandler);

  benchmark('EmitterWithArray.off', function () {
    emitterWithArray.off('event', eventHandler);
  });
  benchmark('EmitterWithBabelArray.off', function () {
    emitterWithBabelArray.off('event', eventHandler);
  });
  benchmark('EmitterWithMap.off', function () {
    emitterWithMap.off('event', eventHandler);
  });
  benchmark('EmitterWithSet.off', function () {
    emitterWithSet.off('event', eventHandler);
  });
});
