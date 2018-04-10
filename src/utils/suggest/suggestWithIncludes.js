function includes (needle, haystack) {
  return haystack.includes(needle);
}

function suggestWithIncludes (input, collection) {
  return collection.filter(item =>
    includes(input.toLowerCase(), item.toLowerCase())
  );
}

export default suggestWithIncludes;
