function includes (needle, haystack) {
  return (new RegExp(needle, 'ig')).test(haystack);
}

function suggestWithRegExp (input, collection, limit = 10) {
  let result = [];

  for (let item of collection.values()) {
    if (includes(input, item)) {
      result.push(item);

      if (result.length === limit) {
        return result;
      }
    }
  }

  return result;
}

export default suggestWithRegExp;
