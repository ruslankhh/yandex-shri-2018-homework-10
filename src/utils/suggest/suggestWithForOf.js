function suggestWithForOf (input, collection) {
  return collection.filter(item => {
    const string = item.toLowerCase();
    const target = input.toLowerCase();
    let result = '';
    let j = 0;

    for (let value of string) {
      if (value === target[j]) {
        result += value;
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
