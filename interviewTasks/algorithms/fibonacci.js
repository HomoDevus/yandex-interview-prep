// Most efficient, with a loop
function fibonacci(n) { // 3
  if (n <= 1) {
    return n
  }

  let a = 0, b = 1 // 1 2
  let res // 2

  for (let i = 1; i < n; i++) { // 2
    res = a + b
    a = b
    b = res
  }

  return res
}

// Less efficient in memory, recursion
function fibonacci(n) {
  if (n <= 1) {
    return n
  }

  return fibonacci(n - 2) + fibonacci(n - 1)
}