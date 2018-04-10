function includes (needle, haystack) {
  return haystack.search(needle) !== -1;
}

function suggestWithIncludes (input, collection) {
  return collection.filter(item =>
    includes(input.toLowerCase(), item.toLowerCase())
  );
}

export default suggestWithIncludes;
