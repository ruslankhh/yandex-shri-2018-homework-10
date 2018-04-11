const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithFor = require('./../../../src/utils/suggest/suggestWithFor');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithFor', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithFor('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
