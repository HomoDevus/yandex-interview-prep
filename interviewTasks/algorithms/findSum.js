function findSum(arr, x) {
  let set = new Set()

  for (let num of arr) {
    let targetNum = x - num
    if (set.has(targetNum)) {
      return [targetNum, num]
    }
    set.add(num)
  }
}

console.log(findSum([1, 5, 4, 5, 2, 1, 6, 6], 5 ))