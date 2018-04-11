function includes (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
}

function suggestWithIndexOf (input, collection, limit = 10) {
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

export default suggestWithIndexOf;
