const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithBitap = require('./../../../src/utils/suggest/suggestWithBitap');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithBitap', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithBitap('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
