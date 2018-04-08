function suggestWithIncludes (input, collection) {
  return collection.filter(item => {
    return item.toLowerCase().includes(input.toLowerCase());
  });
}

export default suggestWithIncludes;
