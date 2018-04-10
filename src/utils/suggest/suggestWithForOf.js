function includes (needle, haystack) {
  let result = '';
  let j = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      result += haystack[i];
      j += 1;

      if (result === needle) {
        return true;
      }
    } else {
      result = '';
      j = 0;
    }
  }

  return false;
}

function suggestWithForOf (input, collection) {
  return collection.filter(item =>
    includes(input.toLowerCase(), item.toLowerCase())
  );
}

export default suggestWithForOf;
