function suggestWithRegExp (input, collection) {
  return collection.filter(item => {
    const source = item;
    const target = new RegExp(input, 'ig');

    return target.test(source);
  });
}

export default suggestWithRegExp;
