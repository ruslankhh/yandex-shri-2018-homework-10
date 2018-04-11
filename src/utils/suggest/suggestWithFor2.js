function includes (needle, haystack) {
  const middle = haystack.length % 2 !== 0
    ? haystack[(haystack.length - 1) / 2]
    : '';
  let result1 = '';
  let result2 = '';
  let i1 = 0;
  let i2 = haystack.length - 1;
  let j1 = 0;
  let j2 = needle.length - 1;

  for (; i1 <= (haystack.length - 1) / 2;) {
    if (haystack[i1] === needle[j1]) {
      result1 += haystack[i1];
      j1 += 1;

      if (result1 === needle) {
        return true;
      }
    } else {
      result1 = '';
      j1 = 0;
    }

    if (haystack[i2] === needle[j2]) {
      result2 = haystack[i2] + result2;
      j2 -= 1;

      if (result2 === needle) {
        return true;
      }
    } else {
      result2 = '';
      j2 = needle.length - 1;
    }

    i1 += 1;
    i2 -= 1;
  }

  return result1 + middle + result2 === needle;
}

function suggestWithForOf2 (input, collection, limit = 10) {
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

export default suggestWithForOf2;
