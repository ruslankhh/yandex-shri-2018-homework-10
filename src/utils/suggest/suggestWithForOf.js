function suggestWithForOf (input, collection) {
  return collection.filter(item => {
    const source = item.toLowerCase();
    const target = input.toLowerCase();
    let result = '';
    let j = 0;

    for (let i = 0; i < source.length; i++) {
      if (source[i] === target[j]) {
        result += source[i];
        j += 1;

        if (result === target) {
          return true;
        }
      } else {
        result = '';
        j = 0;
      }
    }

    return false;
  });
}

export default suggestWithForOf;
