const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithSearch = require('./../../../src/utils/suggest/suggestWithSearch');
const streetsArr = [
  'проспект Сахарова',
  'ул. Ломоносова',
  'ул. Тверская'
];

describe('suggestWithSearch', () => {
  it('возращает массив с найденными улицами', () => {
    const expected = ['ул. Тверская'];
    const result = suggestWithSearch('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
