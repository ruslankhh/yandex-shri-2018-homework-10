function suggestWithIndexOf (input, collection) {
  return collection.filter(item => {
    const source = item.toLowerCase();
    const target = input.toLowerCase();

    return source.indexOf(target) !== -1;
  });
}

export default suggestWithIndexOf;
