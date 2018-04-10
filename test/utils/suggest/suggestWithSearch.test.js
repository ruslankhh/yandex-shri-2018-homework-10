const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithSearch = require('./../../../src/utils/suggest/suggestWithSearch');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithSearch', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithSearch('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
