console.log( sumToRecursion(1000) ); // 5050

// С использованием цикла.
function sumToCycle(n) {
  let sum = 0
  for (let step = 1; step <= n; step++) {
    sum += step
  }

  return sum
}
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumToRecursion(n) {
  if (n === 1) {
    return 1
  } else {
    return n + sumToRecursion(n - 1)
  }
}
// С использованием формулы арифметической прогрессии.