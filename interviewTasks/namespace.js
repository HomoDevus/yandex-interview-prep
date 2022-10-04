function namespace(str) { // 'a.b.c.d.e'
  str = str.split('.')
  let ans = {} // {a: {b: {}}}
  let currPos // ans.a
  for (let letter of str) {
    if (!currPos) {
      ans[letter] = {}
      currPos = ans[letter]
      continue
    }

    currPos[letter] = {}
    currPos = currPos[letter]
  }

  return ans
}

console.log(namespace('a.b.c.d.e'))