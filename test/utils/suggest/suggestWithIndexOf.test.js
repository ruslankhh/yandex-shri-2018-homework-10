const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithIndexOf = require('./../../../src/utils/suggest/suggestWithIndexOf');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithIndexOf', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithIndexOf('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
