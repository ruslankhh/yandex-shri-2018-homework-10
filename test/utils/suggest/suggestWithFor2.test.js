const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithFor2 = require('./../../../src/utils/suggest/suggestWithFor2');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithFor2', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithFor2('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
