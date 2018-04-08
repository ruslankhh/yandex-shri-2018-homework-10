function suggestWithIncludes (input, collection) {
  return collection.filter(item => {
    const source = item.toLowerCase();
    const target = input.toLowerCase();

    return source.includes(target);
  });
}

export default suggestWithIncludes;
