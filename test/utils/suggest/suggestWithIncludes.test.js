const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithIncludes = require('./../../../src/utils/suggest/suggestWithIncludes');
const streetsArr = [
  'проспект Сахарова',
  'ул. Ломоносова',
  'ул. Тверская'
];

describe('suggestWithIncludes', () => {
  it('возращает массив с найденными улицами', () => {
    const expected = ['ул. Тверская'];
    const result = suggestWithIncludes('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
