function includes (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
}

function suggestWithIndexOf (input, collection) {
  return collection.filter(item =>
    includes(input.toLowerCase(), item.toLowerCase())
  );
}

export default suggestWithIndexOf;
