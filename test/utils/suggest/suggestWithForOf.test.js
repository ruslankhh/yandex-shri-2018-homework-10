const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithForOf = require('./../../../src/utils/suggest/suggestWithForOf');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithForOf', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithForOf('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
