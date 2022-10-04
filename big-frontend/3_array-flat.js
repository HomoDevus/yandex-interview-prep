function flat(arr, level = 1) {
  let flatten = []
  let isFlatted = false

  if (level <= 0) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let currItem = arr[i]

    if (Array.isArray(currItem)) {
      flatten = flatten.concat(currItem)
      isFlatted = true
    } else {
      flatten.push(currItem)
    }
  }

  if (isFlatted) {
    return flat(flatten, level - 1)
  } else {
    return arr
  }
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]