function suggestWithIncludes (input, collection) {
  return collection.filter(item => {
    const source = item.toLowerCase();
    const target = input.toLowerCase();

    return source.search(target) !== -1;
  });
}

export default suggestWithIncludes;
