const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggestWithForOf = require('./../../../src/utils/suggest/suggestWithForOf');
const streetsArr = [
  'проспект Сахарова',
  'ул. Ломоносова',
  'ул. Тверская'
];

describe('suggestWithForOf', () => {
  it('возращает массив с найденными улицами', () => {
    const expected = ['ул. Тверская'];
    const result = suggestWithForOf('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
