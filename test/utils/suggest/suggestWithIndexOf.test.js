const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithIndexOf = require('./../../../src/utils/suggest/suggestWithIndexOf');
const streetsArr = [
  'проспект Сахарова',
  'ул. Ломоносова',
  'ул. Тверская'
];

describe('suggestWithIndexOf', () => {
  it('возращает массив с найденными улицами', () => {
    const expected = ['ул. Тверская'];
    const result = suggestWithIndexOf('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
