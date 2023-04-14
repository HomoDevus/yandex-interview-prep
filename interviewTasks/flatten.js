function flatten(arr) {
  if (!arr.some(Array.isArray)) {
    return arr
  }

  return flatten(arr.reduce((acc, curr) => acc.concat(curr), []))
}

console.log(flatten([1, [2, 3, [4, [5]]], 6, 7]) )