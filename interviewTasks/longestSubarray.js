function findLongestSubarray(arr) {
  let prevSubarrayLen = 0
  let maxLen = 0
  let counter = 0
  let hadDelete = false

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    if (num === 0) {
      let len = prevSubarrayLen + counter
      prevSubarrayLen = counter
      counter = 0
      hadDelete = true

      if (len > maxLen) {
        maxLen = len
      }

    } else {
      counter++
    }
  }

  let len = prevSubarrayLen + counter

  if (len > maxLen) {
    maxLen = len
  }

  return hadDelete ? maxLen : maxLen - 1
}

// [1, 1, 0, 1] => 3
// [0,1,1,1,0,1,1,0,1] => 5
// [1, 1, 1] => 2
console.log(findLongestSubarray([1, 1, 0, 1]))
console.log(findLongestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
console.log(findLongestSubarray([1, 1, 1]))
