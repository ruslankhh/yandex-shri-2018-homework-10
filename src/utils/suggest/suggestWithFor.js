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

function suggestWithForOf (input, collection, limit = 10) {
  let result = [];

  for (let item of collection.values()) {
    if (includes(input.toLowerCase(), item.toLowerCase())) {
      result.push(item);

      if (result.length === limit) {
        return result;
      }
    }
  }

  return result;
}

export default suggestWithForOf;
