/*
* На вход функции подаётся массив границ и массив значений. Оба массива целых чисел, отсортированных по возрастанию.
* Например, границы [4, 8] и значения [1, 3, 4, 5, 8, 9].
* Нужно раскидать значения по диапазонам (-inf; 4], (4; 8], (8; +inf) и для каждого
* посчитать количество и сумму попавших в неё значений:
  * [1, 3, 4] -> {quantity: 3, sum: 8}, [5, 8] -> {quantity: 2, sum: 13}, [9] -> {quantity: 1, sum: 9}
* На выходе всегда ожидается массив размером на 1 больше, чем количество границ.
* --------------------------------
* [4, 8], [1, 3, 4, 5, 8, 9] => [{quantity: 3, sum: 8}, {quantity: 2, sum: 13}, {quantity: 1, sum: 9}]
*        4     8
*  1 3 4 | 5 8 | 9
* 2 границы создают 3 диапазона.
* --------------------------------
* [5], [2, 4, 6, 8] => [{quantity: 2, sum: 6}, {quantity: 2, sum: 14}]
*     5
* 2 4 | 6 8
* Числа 2, 4 попадают в первый диапазон, остальные - во второй.
* --------------------------------
*  [7], [1, 2] => [{quantity: 2, sum: 3}, {quantity: 0, sum: 0}]
*      7
*  1 2 |
* Второй диапазон пуст.
*
* [], []
*/

// function splitToIntervals(diapasons, arr) {
//   let ans = []
//   let sum = 0
//   let quantity = 0
//   let diapasonIndex = 0
//
//   debugger
//
//   function pushDiapason() {
//     ans.push({quantity, sum})
//     quantity = 0
//     sum = 0
//     diapasonIndex++
//   }
//
//   for (let i = 0; i < arr.length; i++) {
//     while (diapasonIndex < diapasons.length && arr[i] > diapasons[diapasonIndex]) {
//       pushDiapason()
//     }
//
//     sum += arr[i]
//     quantity += 1
//   }
//
//   for (let i = diapasonIndex; i <= diapasons.length; i++) {
//     pushDiapason()
//   }
//
//   return ans
// }

function splitToIntervals(split, nums) { // [], []
  let result = [] // []

  for (let intervalIndex = 0, numIndex = 0; numIndex <= nums.length && intervalIndex <= split.length; intervalIndex++) { // 0, 0
    let quantity = 0 //
    let sum = 0 //

    while (numIndex < nums.length && (intervalIndex === split.length || split[intervalIndex] >= nums[numIndex])) {
      quantity++
      sum += nums[numIndex]
      numIndex++
    }

    result.push({quantity, sum})
  }

  return result
}

console.log(splitToIntervals([4, 8], [1, 3, 4, 5, 8, 9]))
console.log(splitToIntervals([5], [2, 4, 6, 8]))
console.log(splitToIntervals([7], [1, 2]))
console.log(splitToIntervals([0], [1, 2]))
console.log(splitToIntervals([], []))
console.log(splitToIntervals([], [1, 3, 4, 5, 8, 9]))
console.log(splitToIntervals([0, 1, 2], [5, 6, 7]))
console.log(splitToIntervals([10, 11, 15], [5, 6, 7]))
console.log(splitToIntervals([0, 1, 2, 10, 11, 12], [5, 6, 7]))
