function includes (needle, haystack) {
  return (new RegExp(needle, 'ig')).test(haystack);
}

function suggestWithRegExp (input, collection) {
  return collection.filter(item =>
    includes(input, item)
  );
}

export default suggestWithRegExp;
