const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithRegExp = require('./../../../src/utils/suggest/suggestWithRegExp');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithRegExp', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithRegExp('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
