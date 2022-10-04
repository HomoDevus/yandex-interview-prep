// Проверка массива на монотонность
// ([0, 1, 5, 9, 15]) => true
// ([0, 1, 1, 5, 9, 9, 15]) => true
// ([15, 8, 4, 2, 1]) => true
// ([0, 1, 5, 15, 4]) => false

function isMonoton(arr) { // [0, 1, 5, 9, 15]
  let isIncreasing // true
  let prevNum // 0

  for (let num of arr) { // 1
    if (prevNum) {
      if (isIncreasing === undefined) {
        if (prevNum > num) isIncreasing = false
        else if (prevNum < num) isIncreasing = true
      }

      if (isIncreasing) {
        if (num < prevNum) return false
      } else {
        if (num > prevNum) return false
      }
    }

    prevNum = num
  }

  return true
}

console.log(isMonoton([0, 1, 5, 9, 15]))
console.log(isMonoton([0, 1, 1, 5, 9, 9, 15]))
console.log(isMonoton([15, 8, 4, 2, 1]))
console.log(isMonoton([0, 1, 5, 15, 4]))