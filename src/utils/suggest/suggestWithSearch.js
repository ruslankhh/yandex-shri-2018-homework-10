function suggestWithIncludes (input, collection) {
  return collection.filter(item => {
    return item.toLowerCase().search(input.toLowerCase()) !== -1;
  });
}

export default suggestWithIncludes;
