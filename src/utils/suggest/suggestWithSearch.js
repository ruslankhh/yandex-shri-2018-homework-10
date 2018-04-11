function includes (needle, haystack) {
  return haystack.search(needle) !== -1;
}

function suggestWithIncludes (input, collection, limit = 10) {
  let result = [];

  for (let item of collection.values()) {
    if (includes(input.toLowerCase(), item.toLowerCase())) {
      result.push(item);

      if (result.length === limit) {
        return result;
      }
    }
  }

  return result;
}

export default suggestWithIncludes;
