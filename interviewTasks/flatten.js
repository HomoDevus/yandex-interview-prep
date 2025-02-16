function flatten(arr) {
  if (!arr.some(Array.isArray)) return arr

  return flatten(arr.reduce((acc, cur) => acc.concat(cur), []))
}

console.log(flatten([1, [2, 3, [4, [5]]], 6, 7]) )