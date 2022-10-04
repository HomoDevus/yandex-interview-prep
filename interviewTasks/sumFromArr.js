// Сумма чисел массива
// ([1, 2, '3x']) => 6
// ([1, 2, 'x3']) => 3
// ([1, [1, 2], 2]) => 6

function sumFromArr(arr) {
  let flattenArray = arr.flat()
  let sum = 0

  for (let num of flattenArray) {
    num = parseInt(num)
    if (Number.isInteger(num)) {
      sum += num
    }
  }

  return sum
}

console.log(sumFromArr([1, 2, '3x']))
console.log(sumFromArr([1, 2, 'x3']))
console.log(sumFromArr([1, [1, 2], 2]))