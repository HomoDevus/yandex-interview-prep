function countLength(arr) { // 0, 1
  let amountBeforeDeletion = 0
  let onesInRow = 0
  let maxLength = 0
  let lastZero = false

  function handleZero() {
    let length = onesInRow + amountBeforeDeletion
    if (length > maxLength) {
      maxLength = length
    }

    amountBeforeDeletion = onesInRow
    onesInRow = 0
  }

  arr = arr.filter((item, index) => {
    if (item === 1) {
      onesInRow++
      lastZero = false
      return true
    } else if (index === arr.length - 1) {
      onesInRow++
      handleZero()
      return true
    } else {
      handleZero()
      lastZero = true
      return false
    }
  })

  return onesInRow
}

function countOnes(arr) {
  let isLastZero = false
  let counter = 0
  let maxValue = 0

  arr = arr.filter(item => {
    let ans
    if (!isLastZero && item === 0) {
      ans = false
    } else {
      ans = true
    }

    isLastZero = !item;
    return ans
  })

  for (let num of arr) {
    if (num === 1) {
      counter++
    } else {
      if (counter > maxValue) {
        maxValue = counter
      }

      counter = 0
    }
  }

  return counter > maxValue ? counter : maxValue
}

// function solution(arr) {
//   let inRowCounter = 0
//   let inRowBefore = 0
//   let maxCount = 0
//   let maxCountZeroIndex
//   let prevZeroIndex
//
//   function resetCounters() {
//     if (inRowBefore + inRowCounter > maxCount) {
//       maxCount = inRowBefore + inRowCounter
//       maxCountZeroIndex = prevZeroIndex
//     }
//
//     inRowBefore = inRowCounter
//     inRowCounter = 0
//   }
//
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i]
//
//     if (num === 1) {
//       inRowCounter++
//
//       if (i === arr.length - 1) {
//         resetCounters()
//       }
//     } else {
//       if (i !== 0 && arr[i - 1] === 0) {
//         inRowBefore = 0
//       }
//       resetCounters()
//       prevZeroIndex = i
//     }
//   }
//
//   return maxCount
// }

const solution = (arr) => {
  const bigSequences = arr.join('').split(/0{2,}/).filter(seq => seq.length)

  if (bigSequences.length === 1 && bigSequences[0].match(/1{1,}/g).length === 1) {
    return bigSequences[0].replace('0','').length
  }

  const getLengthSums = (seq) => seq
    .split('0')
    .map(seq => seq.length)
    .map((el,idx,arr)=> idx !== arr.length-1 ? el+arr[idx+1] : 0 )

  const lengths = bigSequences.map(getLengthSums).flat()

  return Math.max(...lengths)
}

console.assert(solution([0, 0, 0]) == 0, '1')
  console.log(solution([0, 0, 0]))
console.assert(solution([1, 0, 0]) == 1, '2')
console.assert(solution([1, 1, 0]) == 2, '3')
console.assert(solution([1, 1, 1]) == 3, '4')
console.assert(solution([1, 0, 0, 0, 0, 1]) == 1, '5')
console.log(solution([1, 0, 0, 0, 0, 1]))
console.assert(solution([0, 1, 0, 0, 0, 1]) == 1, '6')
console.assert(solution([0, 1, 0, 0, 0, 1]) != 2, '7')
console.assert(solution([0, 1, 0, 0, 1, 0]) == 1, '8')
console.assert(solution([1, 1, 0, 1, 0, 1]) == 3, '9')
console.assert(solution([1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]) == 6, '10')
console.assert(solution([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1]) == 5, '11')
console.assert(solution([1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1]) == 8, '12')
console.assert(solution([1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1]) == 10, '13')
console.assert(solution([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]) == 9, '14')
console.log(solution([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.assert(solution([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]) == 2, '15')