const { describe, it } = require('mocha');
const { expect } = require('chai');

const suggest = require('./../../../src/utils/suggest/suggest');
const streetsArr = [
  'проспект Сахарова',
  'ул. Ломоносова',
  'ул. Тверская'
];

describe('suggest', () => {
  it('возращает массив с найденными улицами', () => {
    const expected = ['ул. Тверская'];
    const result = suggest('тверская', streetsArr);

    expect(result).to.deep.equal(expected);
  });
});
