const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithIncludes = require('./../../../src/utils/suggest/suggestWithIncludes');
const streetsArr = require('./../../data/data');
const expected = require('./../../data/expected');

describe('suggestWithIncludes', () => {
  it('возращает массив с найденными улицами', () => {
    const result = suggestWithIncludes('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
