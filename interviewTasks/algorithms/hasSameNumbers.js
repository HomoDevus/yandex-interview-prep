function containsSameDigits(num1, num2) { // 2021, 1202
  const Arr1 = numToDigitArr(num1)
  const Arr2 = numToDigitArr(num2)
  const Arr1Counted = getCountedNumbers(Arr1)
  const Arr2Counted = getCountedNumbers(Arr2)

  if (Arr1Counted.length !== Arr2Counted.length) return false
  for (let i = 0; i < Arr1Counted.length; i++) {
    if (Arr1Counted[i] !== Arr2Counted[i]) return false
  }

  return true
}

function numToDigitArr(num) { // 2021
  const Arr = []
  let numCopy = num

  while(numCopy > 0) {
    Arr.push(numCopy % 10)
    numCopy = Math.floor(numCopy / 10)
  }

  return Arr
}

function getCountedNumbers(arr) {
  const MaxVal = Math.max(...arr)
  const MinVal = Math.min(...arr)
  const CountArr = []

  for (let i = MinVal; i <= MaxVal; i++) {
    CountArr[i] = 0
  }

  for (let num of arr) {
    CountArr[num] += 1
  }

  return CountArr
}

console.log(containsSameDigits(46554, 45453))