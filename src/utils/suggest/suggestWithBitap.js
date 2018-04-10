const preIncludes = (needle) => {
  let lim = 0;
  let S = [];

  for (let i = 0; i < 256; i++) {
    S[i] = ~0;
  }

  for (let i = 0, j = 1; i < needle.length; i++) {
    S[needle[i]] = S[needle[i]] & ~j;
    lim = lim | j;
    j = j << 1;
  }

  return ~(lim >> 1);
};

function includes (needle, haystack) {
  let lim = preIncludes(needle);
  let state = ~0;
  let S = [];

  for (let i = 0; i < haystack.length; i++) {
    state = (state << 1) | S[haystack[i]];
    if (state < lim) {
      return i - needle.length !== -1;
    }
  }

  return false;
}

function suggestWithBitap (input, collection) {
  return collection.filter(item => {
    includes(input.toLowerCase(), item.toLowerCase());
  });
}

export default suggestWithBitap;
