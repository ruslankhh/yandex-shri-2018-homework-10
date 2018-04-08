const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithRegExp = require('./../../../src/utils/suggest/suggestWithRegExp');
const streetsArr = [
  'проспект Сахарова',
  'ул. Ломоносова',
  'ул. Тверская'
];

describe('suggestWithRegExp', () => {
  it('возращает массив с найденными улицами', () => {
    const expected = ['ул. Тверская'];
    const result = suggestWithRegExp('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
