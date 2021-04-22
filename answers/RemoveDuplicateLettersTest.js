Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length - 1];
  },
});

const removeDuplicateLetters = s => {
  const counter = {};
  for (let c of s) {
    counter[c] = ~~counter[c] + 1;
  }

  const result = [];
  const visited = new Set();

  for (let c of s) {
    counter[c]--;

    if (visited.has(c)) {
      continue;
    }

    while (result.last > c && counter[result.last] > 0) {
      visited.delete(result.last);
      result.pop();
    }

    result.push(c);
    visited.add(c);
  }

  return result.join('');
};

str="certification";
console.log(removeDuplicateLetters(str));