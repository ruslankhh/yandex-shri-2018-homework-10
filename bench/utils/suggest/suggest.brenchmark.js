/* global compare, benchmark */
const suggestWithFor = require('./../../../dist/utils/suggest/suggestWithFor');
const suggestWithFor2 = require('./../../../dist/utils/suggest/suggestWithFor2');
const suggestWithIncludes = require('./../../../dist/utils/suggest/suggestWithIncludes');
const suggestWithIndexOf = require('./../../../dist/utils/suggest/suggestWithIndexOf');
const suggestWithRegExp = require('./../../../dist/utils/suggest/suggestWithRegExp');
const suggestWithSearch = require('./../../../dist/utils/suggest/suggestWithSearch');
const streetsArr = require('./../../../test/data/data');

compare('suggest', function () {
  benchmark('suggestWithFor', function () {
    suggestWithFor('тверская', streetsArr);
  });

  benchmark('suggestWithFor2', function () {
    suggestWithFor2('тверская', streetsArr);
  });

  benchmark('suggestWithIncludes', function () {
    suggestWithIncludes('тверская', streetsArr);
  });

  benchmark('suggestWithIndexOf', function () {
    suggestWithIndexOf('тверская', streetsArr);
  });

  benchmark('suggestWithRegExp', function () {
    suggestWithRegExp('тверская', streetsArr);
  });

  benchmark('suggestWithSearch', function () {
    suggestWithSearch('тверская', streetsArr);
  });
});
