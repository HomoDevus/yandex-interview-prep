function splitToIntervals(diapasons, arr) {
  let ans = []
  let sum = 0
  let quantity = 0
  let diapasonIndex = 0

  debugger

  function pushDiapason() {
    ans.push({quantity, sum})
    quantity = 0
    sum = 0
    diapasonIndex++
  }

  for (let i = 0; i < arr.length; i++) {
    while (diapasonIndex < diapasons.length && arr[i] > diapasons[diapasonIndex]) {
      pushDiapason()
    }

    sum += arr[i]
    quantity += 1
  }

  for (let i = diapasonIndex; i <= diapasons.length; i++) {
    pushDiapason()
  }

  return ans
}

console.log(splitToIntervals([4, 8], [1, 3, 4, 5, 8, 9]))
// console.log(splitToIntervals([5], [2, 4, 6, 8]))
// console.log(splitToIntervals([7], [1, 2]))
// console.log(splitToIntervals([0], [1, 2]))
// console.log(splitToIntervals([], []))
// console.log(splitToIntervals([], [1, 3, 4, 5, 8, 9]))
// console.log(splitToIntervals([0, 1, 2], [5, 6, 7]))
// console.log(splitToIntervals([10, 11, 15], [5, 6, 7]))
// console.log(splitToIntervals([0, 1, 2, 10, 11, 12], [5, 6, 7]))
