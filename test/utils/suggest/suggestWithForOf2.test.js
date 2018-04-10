const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithForOf2 = require('./../../../src/utils/suggest/suggestWithForOf2');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithForOf2', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithForOf2('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
