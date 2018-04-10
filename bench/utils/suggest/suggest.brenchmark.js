/* global compare, benchmark */
const suggestWithForOf = require('./../../../dist/utils/suggest/suggestWithForOf');
const suggestWithForOf2 = require('./../../../dist/utils/suggest/suggestWithForOf2');
const suggestWithIncludes = require('./../../../dist/utils/suggest/suggestWithIncludes');
const suggestWithIndexOf = require('./../../../dist/utils/suggest/suggestWithIndexOf');
const suggestWithRegExp = require('./../../../dist/utils/suggest/suggestWithRegExp');
const suggestWithSearch = require('./../../../dist/utils/suggest/suggestWithSearch');
const streetsArr = require('./../../../test/data/data');

compare('suggest', function () {
  benchmark('suggestWithForOf', function () {
    suggestWithForOf('тверская', streetsArr);
  });

  benchmark('suggestWithForOf2', function () {
    suggestWithForOf2('тверская', streetsArr);
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
